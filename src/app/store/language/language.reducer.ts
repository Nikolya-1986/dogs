import { Action, createReducer, on } from "@ngrx/store";

import { initializeLanguageSuccess, setLanguage } from "./language.actions";
import { INITIAL_LANGUAGE_STATE, LanguageState } from "./language.state";


const _languageReduserInternal = createReducer(
    INITIAL_LANGUAGE_STATE,
    on(setLanguage, initializeLanguageSuccess, (state, { language }) => ({
        ...state,
        language: language,
    })),
);

export function LanguageReducer(state: LanguageState | undefined, action: Action) {
    return _languageReduserInternal(state, action);
};