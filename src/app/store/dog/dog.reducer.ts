import { Action, createReducer, on } from "@ngrx/store";

import { DogState, INITIAL_DOG_STATE } from "./dog.state";
import * as dogActions from "./dog.actions";


const _dogReduserInternal = createReducer(
    INITIAL_DOG_STATE,
    on(dogActions.loadDogsRequest, (state): DogState => ({
        ...state,
    })),
    on(dogActions.loadDogsSuccess, (state, action): DogState => ({
        ...state,
        dogs: [...state.dogs, ...action.dogs],
    })),

    on(dogActions.setByFilterParams, (state, { filterParams }): DogState => {
        return Object.assign({}, state, {
            filterParams: {
                filterQuery: filterParams.filterQuery, 
                filterBy: filterParams.filterBy,
            }
        })
    }),

    on(dogActions.setByFilterSize, (state, { filterSize }): DogState => {
        return Object.assign({}, state, {
            filterSize: {
                parameterSize: filterSize.parameterSize,
            }
        })
    }),

    on(dogActions.setSortKey, (state, { sortParams }): DogState => {
        return Object.assign({}, state, {
            sortParams: {
                sortKey: sortParams.sortKey,
            },
        })
    }),
    on(dogActions.setFilterSingularity, (state, { filterSingularity }): DogState => {
        return Object.assign({}, state, {
            filterSingularity: {
                singularity: filterSingularity.singularity,
            }
        });
    }),


    on(dogActions.setPaginationPage, (state, { pagination }) => {
        return {
            ...state,
            pagination: pagination
        }
    }),
    on(dogActions.resetDogsStore, (state) => ({
        ...state,
        ...INITIAL_DOG_STATE,
    })),

    on(dogActions.increaseDogRatingSuccess, (state, { dog }) => {
        const currentDog = dog;
        let like = currentDog.rating.like + 1;
        let dislike = currentDog.rating.dislike;
        console.log(`id: ${currentDog.id}, like: ${like}, dislike: ${dislike}`);
        return Object.assign({}, state, {
            rating: {
                title: '',
                like: like,
                dislike: dislike,
            }
        })
    }),
    on(dogActions.decreaseDogRatingSuccess, (state, { dog }) => {
        const currentDog = dog;
        let like = currentDog.rating.like;
        let dislike = currentDog.rating.dislike + 1;
        console.log(`id: ${currentDog.id}, like: ${like}, dislike: ${dislike}`);
        return Object.assign({}, state, {
            rating: {
                title: '',
                like: like,
                dislike: dislike,
            }
        })
    }),
);

export function DogReducer(state: DogState | undefined, action: Action) {
    return _dogReduserInternal(state, action);
};