import { Action, createReducer, on } from "@ngrx/store";

import * as dogActions from "./dog.actions";
import * as dogState from "./dog.state";

const _dogReduserInternal = createReducer(
    dogState.initialDogState,
    on(dogActions.loadDogsRequest, (state, actoin) => ({
        ...state,
    })),
    on(dogActions.loadDogsSuccess, (state, action) => ({
        ...state,
        dogs: [...action.dogs],
    })),
);

export function DogReducer(state: dogState.DogState | undefined, action: Action) {
    return _dogReduserInternal(state, action);
};