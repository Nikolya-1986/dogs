import { Action, createReducer, on } from "@ngrx/store";

import { DogState, INITIAL_DOG_STATE } from "./dog.state";
import * as dogActions from "../dog/actions/dog.actions";


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
    on(dogActions.increaseDogRatingSuccess, (state, action) => {
        let like = action.dog.rating.like;
        console.log(`id: ${action.dog.id}, like: ${++like}, dislike: ${action.dog.rating.dislike}`);
        return Object.assign({}, state, {
            [action.dog.id]: {
                rating: {
                    title: '',
                    like: ++like,
                }
            }
        })
    }),
    on(dogActions.decreaseDogRatingSuccess, (state, action) => {
        let dislike = action.dog.rating.dislike;
        console.log(`id: ${action.dog.id}, like: ${action.dog.rating.like}, dislike: ${++dislike}`);
        return Object.assign({}, state, {
            rating: {
                title: '',
                dislike: ++dislike,
            }
        })
    }),
);

export function DogReducer(state: DogState | undefined, action: Action) {
    return _dogReduserInternal(state, action);
};