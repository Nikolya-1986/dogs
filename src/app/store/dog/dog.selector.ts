// @ngrx
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DogState } from "./dog.state";


export const DOG_STATE_NAME = 'dog';

const getDogState = createFeatureSelector<DogState>(DOG_STATE_NAME);

export const getDogs = createSelector(getDogState,
    (state: DogState) => state.dogs,
);

export const getPagination = createSelector(getDogState,
    (state: DogState) => state.pagination,
)
