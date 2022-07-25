import { createAction, props, union } from "@ngrx/store";

import { CompetitionsDTO } from "../../../interfaces/competitions.interface";
import { BreedGroupDTO } from "../../../interfaces/breed-group.iterface";
import { DescriptionDTO } from "../../../interfaces/description.interface";
import { DogDTO, Rating } from "../../../interfaces/dog.interface";
import { 
    FilterParamsState, 
    FilterSingularityState, 
    FilterSizeState, 
    PaginationState, 
    SortParamsState 
} from "../dog.state";


export enum DogActionsType {
    LOAD_DOGS_REQUEST = '[Dog] Load dogs request',
    LOAD_DOGS_SUCCESS = '[Dog] Load dogs success',

    SET_FILTER_BY_PARAMS = '[Dog] Set filter by properties and query',
    SET_FILTER_BY_SIZE = '[Dog] set filter size',
    SET_SORT_KEY = '[Dog] Set sort key',
    SET_FILTER_BY_SINGULARITY = '[Dog] Set filter singularity',
    SET_PAGINATION_PAGE = '[Dog] Set pagination pade',
    RESET_DOGS_STORE = '[Dog] Reset dogs store',

    INCREASE_DOG_RATING_REQUEST = '[Dog] Increase dog rating request',
    INCREASE_DOG_RATING_SUCCESS = '[Dog] Increase dog rating success',
    DECREASE_DOG_RATING_REQUEST = '[Dog] Decrease dog rating request',
    DECREASE_DOG_RATING_SUCCESS = '[Dog] Decrease dog rating success',
};

export const loadDogsRequest = createAction(
    DogActionsType.LOAD_DOGS_REQUEST,
);

export const loadDogsSuccess = createAction(
    DogActionsType.LOAD_DOGS_SUCCESS,
    props<{ dogs: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>[] }>(),
);

export const setByFilterParams = createAction(
    DogActionsType.SET_FILTER_BY_PARAMS,
    props<{ filterParams: FilterParamsState }>(),
);

export const setByFilterSize = createAction(
    DogActionsType.SET_FILTER_BY_SIZE,
    props<{ filterSize: FilterSizeState }>(),
);

export const setSortKey = createAction(
    DogActionsType.SET_SORT_KEY,
    props<{ sortParams: SortParamsState }>(),
);

export const setFilterSingularity = createAction(
    DogActionsType.SET_FILTER_BY_SINGULARITY,
    props<{ filterSingularity: FilterSingularityState }>(),
);

export const setPaginationPage = createAction (
    DogActionsType.SET_PAGINATION_PAGE,
    props<{ pagination: PaginationState }>(),
)

export const resetDogsStore = createAction (
    DogActionsType.RESET_DOGS_STORE,
);

export const increaseDogRatingRequest = createAction(
    DogActionsType.INCREASE_DOG_RATING_REQUEST,
    props<{ dog: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO> }>(),
);

export const increaseDogRatingSuccess = createAction(
    DogActionsType.INCREASE_DOG_RATING_SUCCESS,
    props<{ dog: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO> }>(),
);

export const decreaseDogRatingRequest = createAction(
    DogActionsType.DECREASE_DOG_RATING_REQUEST,
    props<{ dog: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO> }>(),
)

export const decreaseDogRatingSuccess = createAction(
    DogActionsType.DECREASE_DOG_RATING_SUCCESS,
    props<{ dog: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO> }>(),
);


const allDogAction = union({
    loadDogsRequest,
    loadDogsSuccess,
    
    setByFilterParams,
    setByFilterSize,
    setSortKey,
    setPaginationPage,
    resetDogsStore,

    increaseDogRatingRequest,
    increaseDogRatingSuccess,
    decreaseDogRatingRequest,
    decreaseDogRatingSuccess,
});

export type DogAction = typeof allDogAction;