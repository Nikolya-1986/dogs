export interface SharedState {
    showloading: boolean;
    errorMessage: string;
};

export const initialSharedState: SharedState = {
    showloading: false,
    errorMessage: '',
};

export default interface DefaultSharedState {
    dog: SharedState,
};