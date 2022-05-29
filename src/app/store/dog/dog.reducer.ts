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
        dogs: [...action.dogs],
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
    on(dogActions.resetDogsStore, (state) => ({
        ...state,
        ...dogState.INITIAL_DOG_STATE,
    }))
);

export function DogReducer(state: dogState.DogState | undefined, action: Action) {
    return _dogReduserInternal(state, action);
};