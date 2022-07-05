import { createAction, props, union } from '@ngrx/store';

export enum LanguageActions {
  SET_LANGUAGE = '[LANGUAGE] set language',// установить язык 
  LANGUAGE_INSTALLED = '[LANGUAGE] language installed',// установленный язык
  INITIALIZE_LANGUAGE = '[LANGUAGE] initialize language',// инициализировать язык
  INITIALIZE_LANGUAGE_SUCCESS = '[LANGUAGE] initialize language success',
  INITIALIZE_LANGUAGE_FAILURE = '[LANGUAGE] initialize language failure',
};

export const setLanguage = createAction(
    LanguageActions.SET_LANGUAGE,
    props<{ language: string }>(),
);

export const languageSettled = createAction(LanguageActions.LANGUAGE_INSTALLED);

export const initializeLanguage = createAction(LanguageActions.INITIALIZE_LANGUAGE);

export const initializeLanguageSuccess = createAction(
    LanguageActions.INITIALIZE_LANGUAGE_SUCCESS,
    props<{ language: string }>()
);
  
export const initializeLanguageFailure = createAction(LanguageActions.INITIALIZE_LANGUAGE_FAILURE);

const allLanguageAction = union({
    setLanguage,
    languageSettled,
    initializeLanguage,
    initializeLanguageSuccess,
    initializeLanguageFailure,
});

export type DogAction = typeof allLanguageAction;