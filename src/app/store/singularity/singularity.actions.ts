import { createAction, props, union } from "@ngrx/store";

export enum SingularityActionsType {
    LOAD_SINGULARITIES_REQUEST = '[Singularity] Load singularities request',
    LOAD_SINGULARITIES_SUCCESS = '[Singularity] Load singularities success',
};

export const loadSingularitiesRequest = createAction(
    SingularityActionsType.LOAD_SINGULARITIES_REQUEST,
);

export const loadSingularitiesSuccess = createAction(
    SingularityActionsType.LOAD_SINGULARITIES_SUCCESS,
    props<{ singularities: string[] }>(),
);

const allSingularityAction = union({
    loadSingularitiesRequest,
    loadSingularitiesSuccess,
});

export type SingularityAction = typeof allSingularityAction;