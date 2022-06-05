// @ngrx
import { createAction, props, union } from "@ngrx/store";
// interfaces
import { CompetitionsDTO } from "../../interfaces/competitions.interface";
import { BreedGroupDTO } from "../../interfaces/breed-group.iterface";
import { DescriptionDTO } from "../../interfaces/description.interface";
import { DogDTO } from "../../interfaces/dog.interface";
import { PaginationState } from "./dog.state";


export enum DogActionsType {
    LOAD_DOGS_REQUEST = '[Dog] Load dogs request',
    LOAD_DOGS_SUCCESS = '[Dog] Load dogs success',
    SET_FILTER_BY = '[Dog] Set filter by properties and query',
    SET_SORT_KEY = '[Dog] Set sort key',
    SET_PAGINATION_PAGE = '[Dog] Set pagination pade',
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
    DogActionsType.SET_FILTER_BY,
    props<{ filters: { filterBy: string[]; query: string } }>(),
);

export const setSortKey = createAction(
    DogActionsType.SET_SORT_KEY,
    props<{ sortKey: string }>(),
);

export const setPaginationPage = createAction (
    DogActionsType.SET_PAGINATION_PAGE,
    props<{ pagination: PaginationState }>(),
)

export const resetDogsStore = createAction (
    DogActionsType.RESET_DOGS_STORE,
);

const allDogAction = union({
    loadDogsRequest,
    loadDogsSuccess,
    setByFilter,
    setSortKey,
    setPaginationPage,
    resetDogsStore,
});

export type DogAction = typeof allDogAction;