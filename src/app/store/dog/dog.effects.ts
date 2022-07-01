import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, exhaustMap, map, Observable, of, switchMap, tap } from "rxjs";

import { FacadeService } from "../../services/facades/facade.service";
import * as sharedActions from '../shared/shared.actions';
import * as dogActions from './dog.actions';
import { SharedStoreFacade } from "../shared/shared.facade";


@Injectable()
export class DogEffects { 
    
    loadDogs$: Observable<Action> = createEffect(() => this._actions$
        .pipe(
            ofType(dogActions.DogActionsType.LOAD_DOGS_REQUEST),
            exhaustMap(() => {
                return this._facadeService.getDogs().pipe(
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
            ofType(dogActions.DogActionsType.INCREASE_DOG_RATING),
            switchMap(({ id }) => this._facadeService.getLikeRating(id)
                .pipe(
                    map(rating => dogActions.updateDogRaring({ rating })),
                    tap((response) => console.log(response.rating.rating.likes)),
                    catchError((error) => of(sharedActions.setErrorMessage(error)))
                )
            )
        ),
        { useEffectsErrorHandler: false }
    );

    constructor(
        private _actions$: Actions,
        private _facadeService: FacadeService,
        private _sharedStoreFacade: SharedStoreFacade,
    ) {}
}
