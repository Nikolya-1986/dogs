import { createAction, props, union } from "@ngrx/store";

import { CompetitionsDTO } from "../../interfaces/competitions.interface";
import { BreedGroupDTO } from "../../interfaces/breed-group.iterface";
import { LocationDTO } from "../../interfaces/location.interface";
import { DogDTO } from "../../interfaces/dog.interface";


export enum DogActionsType {
    LOAD_DOGS_REQUEST = '[Dog] Load dogs request',
    LOAD_DOGS_SUCCESS = '[Dog] Load dogs success',
};

export const loadDogsRequest = createAction(
    DogActionsType.LOAD_DOGS_REQUEST,
);

export const loadDogsSuccess = createAction(
    DogActionsType.LOAD_DOGS_SUCCESS,
    props<{ dogs: DogDTO<CompetitionsDTO, BreedGroupDTO, LocationDTO>[] }>(),
);

const allDogAction = union({
    loadDogsRequest,
    loadDogsSuccess,
});

export type DogAction = typeof allDogAction;