import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LanguageState } from "./language.state";

export const LANGUAGE_STATE_NAME = 'language';

const languageState = createFeatureSelector<LanguageState>(LANGUAGE_STATE_NAME);

export const selectLanguage = createSelector(
    languageState,
    (state: LanguageState) => state.language,
);