import { Action, createReducer, on } from "@ngrx/store";
import * as singularityAction from "./singularity.actions";
import * as singularityState from "./singularity.state";

const _singularityReduserInternal = createReducer(
    singularityState.INITIAL_SINGULARITY_STATE,
    on(singularityAction.loadSingularitiesRequest, (state) => ({
        ...state,
    })),
    on(singularityAction.loadSingularitiesSuccess, (state, action) => ({
        ...state,
        singularities: [...state.singularities, ...action.singularities],
    })),
);

export function SingularityReducer(state: singularityState.SingularityState | undefined, action: Action) {
    return _singularityReduserInternal(state, action);
};