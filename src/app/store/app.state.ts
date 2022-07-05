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
import { LanguageState } from './language/language.state';
import { LANGUAGE_STATE_NAME } from './language/language.selector';
import { LanguageReducer } from './language/language.reducer';


export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  [DOG_STATE_NAME]: DogState;
  [SINGULARITY_STATE_NAME]: SingularityState;
  [LANGUAGE_STATE_NAME]: LanguageState;
  router: RouterReducerState;
};

export const appReducer: ActionReducerMap<AppState> = {
  [SHARED_STATE_NAME]: SharedReduser,
  [DOG_STATE_NAME]: DogReducer,
  [SINGULARITY_STATE_NAME]: SingularityReducer,
  [LANGUAGE_STATE_NAME]: LanguageReducer,
  router: routerReducer,
};