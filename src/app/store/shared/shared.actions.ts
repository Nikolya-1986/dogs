import { createAction, props, union } from "@ngrx/store";

export enum SharedActionType {
    SET_LOADING_SPINNER = '[Shared state] Set loading spinner',
    SET_ERROR_MESSAGE = '[Share state] Set error message'
};

export const setLoadingSpinner = createAction (
    SharedActionType.SET_LOADING_SPINNER,
    props<{ status: boolean }>(),
);

export const setErrorMessage = createAction (
    SharedActionType.SET_ERROR_MESSAGE,
    props<{ message: string }>(),
);

const allSharedAction = union({
    setLoadingSpinner,
    setErrorMessage,
});

export type SharedAction = typeof allSharedAction;