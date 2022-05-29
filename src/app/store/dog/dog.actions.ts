// @ngrx
import { createAction, props, union } from "@ngrx/store";
// interfaces
import { CompetitionsDTO } from "../../interfaces/competitions.interface";
import { BreedGroupDTO } from "../../interfaces/breed-group.iterface";
import { DescriptionDTO } from "../../interfaces/description.interface";
import { DogDTO } from "../../interfaces/dog.interface";


export enum DogActionsType {
    LOAD_DOGS_REQUEST = '[Dog] Load dogs request',
    LOAD_DOGS_SUCCESS = '[Dog] Load dogs success',
    SET_BY_FILTER = '[Dog] Set filter by properties and query',
    RESET_DOGS_STORE = '[Dog] Reset dogs store',
};

export const loadDogsRequest = createAction(
    DogActionsType.LOAD_DOGS_REQUEST,
);

export const loadDogsSuccess = createAction(
    DogActionsType.LOAD_DOGS_SUCCESS,
    props<{ dogs: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>[] }>(),
);

export const setByFilter = createAction(
    DogActionsType.SET_BY_FILTER,
    props<{ filters: { filterBy: string[]; query: string } }>(),
);

export const resetDogsStore = createAction (
    DogActionsType.RESET_DOGS_STORE,
);

const allDogAction = union({
    loadDogsRequest,
    loadDogsSuccess,
    setByFilter,
    resetDogsStore,
});

export type DogAction = typeof allDogAction;