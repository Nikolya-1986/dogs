import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

import { DOG_STATE_NAME } from './dog/dog.selector';
import { DogReducer } from './dog/dog.reducer';
import { DogState } from './dog/dog.state';
import { SHARED_STATE_NAME } from './shared/shared.selector';
import { SharedReduser } from './shared/shared.reducer';
import { SharedState } from './shared/shared.state';
import { SingularityState } from './singularity/singularity.state';
import { SINGULARITY_STATE_NAME } from './singularity/singularity.selector';
import { SingularityReducer } from './singularity/singularity.reducer';


export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  [DOG_STATE_NAME]: DogState;
  [SINGULARITY_STATE_NAME]: SingularityState;
  router: RouterReducerState;
};

export const appReducer: ActionReducerMap<AppState> = {
  [SHARED_STATE_NAME]: SharedReduser,
  [DOG_STATE_NAME]: DogReducer,
  [SINGULARITY_STATE_NAME]: SingularityReducer,
  router: routerReducer,
};