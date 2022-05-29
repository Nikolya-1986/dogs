// @ngrx
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DogState } from "./dog.state";


export const DOG_STATE_NAME = 'dog';

const getSDogState = createFeatureSelector<DogState>(DOG_STATE_NAME);

export const getDogs = createSelector(getSDogState,
    (state: DogState) => state.dogs,
);
