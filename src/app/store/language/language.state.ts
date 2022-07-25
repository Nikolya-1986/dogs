export interface LanguageState {
    language: string;
};

export const INITIAL_LANGUAGE_STATE: LanguageState = {
    language: 'en',
};

export default interface DefaultLanguageState {
    language: LanguageState,
};