import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SingularityState } from "./singularity.state";


export const SINGULARITY_STATE_NAME = 'singularity';

const getSingularityState = createFeatureSelector<SingularityState>(SINGULARITY_STATE_NAME);

export const getSingularities = createSelector(getSingularityState,
    (state: SingularityState) => state.singularities,
);