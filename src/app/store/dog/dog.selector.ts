// @ngrx
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DogState } from "./dog.state";


export const DOG_STATE_NAME = 'dog';

const gdogState = createFeatureSelector<DogState>(DOG_STATE_NAME);

export const getDogs = createSelector(gdogState,
    (state: DogState) => state.dogs,
);

export const getPagination = createSelector(gdogState,
    (state: DogState) => state.pagination,
)
