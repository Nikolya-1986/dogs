export interface SingularityState {
    singularities: string[],
};

export const INITIAL_SINGULARITY_STATE: SingularityState = {
    singularities: [],
};

export default interface DefaultSingularityState {
    singularities: SingularityState,
};
