import { Action, createReducer, on } from "@ngrx/store";

import * as sharedActions from "./shared.actions";
import * as sharedState from "./shared.state";

const _shareReducer = createReducer(
    sharedState.initialSharedState,
    on(sharedActions.setLoadingSpinner, (state, action) => ({
        ...state,
        showloading: action.status,
    })),
    on(sharedActions.setErrorMessage, (state, action) => ({
        ...state,
        errorMessage: action.message,
    }))
);

export function SharedReduser(state: sharedState.SharedState | undefined, action: Action) {
    return _shareReducer(state, action)
};