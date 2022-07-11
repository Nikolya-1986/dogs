import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { catchError, exhaustMap, map, Observable, of, switchMap, tap } from "rxjs";

import { FacadeService } from "../../services/facades/facade.service";
import { SharedStoreFacade } from "../shared/shared.facade";
import { DogState } from "./dog.state";
import * as sharedActions from '../shared/shared.actions';
import * as dogActions from './dog.actions';


@Injectable()
export class DogEffects { 
    
    loadDogs$: Observable<Action> = createEffect(() => this._actions$
        .pipe(
            ofType(dogActions.DogActionsType.LOAD_DOGS_REQUEST),
            exhaustMap(() => {
                return this._facadeService.getDogs()
                    .pipe(
                        map((dogs) => {
                            this._sharedStoreFacade.getLoadingSpinner(false);
                            this._sharedStoreFacade.getErrorMessage('');
                            return dogActions.loadDogsSuccess({ dogs });
                        }),
                        catchError((error) => {
                            this._sharedStoreFacade.getLoadingSpinner(false);
                            return of(sharedActions.setErrorMessage(error));
                        })
                    );
            })
        ),
        { useEffectsErrorHandler: false }
    );

    increaseRating$: Observable<Action> = createEffect(() => this._actions$
        .pipe(
            ofType(dogActions.DogActionsType.INCREASE_DOG_RATING_REQUEST),
            switchMap((action: any) => {
                return this._facadeService.updateLikeRating(action.dog)
                    .pipe(
                        map(() => dogActions.increaseDogRatingSuccess({ dog: action.dog })),
                        catchError((error) => of(sharedActions.setErrorMessage(error))),
                    )
                }
            )
        ),
        { useEffectsErrorHandler: false }
    );

    constructor(
        private _actions$: Actions,
        private _dogStore: Store<DogState>,
        private _facadeService: FacadeService,
        private _sharedStoreFacade: SharedStoreFacade,
    ) {}
}
