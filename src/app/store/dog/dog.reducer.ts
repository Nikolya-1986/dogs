// @ngrx
import { Action, createReducer, on } from "@ngrx/store";
import * as dogActions from "./dog.actions";
import * as dogState from "./dog.state";
// interfaces
import { BreedGroupDTO } from "../../interfaces/breed-group.iterface";
import { CompetitionsDTO } from "../../interfaces/competitions.interface";
import { DescriptionDTO } from "../../interfaces/description.interface";
import { DogDTO } from "../../interfaces/dog.interface";


const _dogReduserInternal = createReducer(
    dogState.INITIAL_DOG_STATE,
    on(dogActions.loadDogsRequest, (state) => ({
        ...state,
    })),
    on(dogActions.loadDogsSuccess, (state, action) => ({
        ...state,
        dogs: [...state.dogs, ...action.dogs],
    })),
    on(dogActions.setByFilter, (state, { filters }) => {

        let filteredDogs = [...state.dogs];
        const searchQueryForDog = filters.query;
        const fiterByField = filters.filterBy;
        if (searchQueryForDog.trim()) {
            filteredDogs = filteredDogs.filter((dog: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO> | any) => {
                const lowerFilterQuery = searchQueryForDog.toLowerCase();
                const result = fiterByField.map((fieldSort: string) => {
                    return dog[fieldSort].toLowerCase().includes(lowerFilterQuery);
                })
                .some((item) => item);
                return result;
            })
        } 
        return {
            ...state,
            dogs: [...filteredDogs],
            filterQuery: searchQueryForDog, 
            filterBy: fiterByField,
        }
    }),
    on(dogActions.setSortKey, (state, { sortKey }) => {
        let sortedDogs = [...state.dogs];
        sortedDogs.sort((a: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO> | any, b: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO> | any) => {
            const param_a = a[sortKey];
            const param_b = b[sortKey];
            return compare(param_a, param_b)
        })
        return {
            ...state,
            dogs: [...sortedDogs],
            sortKey: sortKey,
        }
    }),
    on(dogActions.setPaginationPage, (state, { pagination }) => {
        return {
            ...state,
            pagination: pagination
        }
    }),
    on(dogActions.resetDogsStore, (state) => ({
        ...state,
        ...dogState.INITIAL_DOG_STATE,
    }))
);

export function compare(a: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>, b: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>,) {

    const compare = a.age - b.age;
  
    if (compare > 0) {
      return 1;
    }
    else if ( compare < 0) {
      return -1;
    }
    else return 0;
};

export function DogReducer(state: dogState.DogState | undefined, action: Action) {
    return _dogReduserInternal(state, action);
};