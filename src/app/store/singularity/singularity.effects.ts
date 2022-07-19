import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, Observable, of, switchMap, tap } from "rxjs";

import { FacadeService } from "../../services/facades/facade.service";
import { SharedStoreFacade } from "../shared/shared.facade";
import * as singularityActions from "./singularity.actions";
import * as sharedActions from '../shared/shared.actions';


@Injectable()
export class SingularityEffect {

    loadSingularity$: Observable<Action> = createEffect(() => this._actions$
        .pipe(
            ofType(singularityActions.SingularityActionsType.LOAD_SINGULARITIES_REQUEST),

            switchMap(() => {
                return this._facadeService.getSingularities().pipe(
                    map((singularities: string[]) => {
                        this._sharedStoreFacade.getLoadingSpinner(false);
                        this._sharedStoreFacade.getErrorMessage('');
                        const nameButtonAllSingularity = 'All Singularity';
                        singularities = [nameButtonAllSingularity, ...singularities];
                        return singularityActions.loadSingularitiesSuccess({ singularities });
                    }),
                    // tap((response) => console.log(response.singularities)),
                    catchError((error) => {
                        this._sharedStoreFacade.getLoadingSpinner(false);
                        return of(sharedActions.setErrorMessage(error));
                    })
                )
            })
        ),
        { useEffectsErrorHandler: false }
    )

    constructor(
        private _actions$: Actions,
        private _facadeService: FacadeService,
        private _sharedStoreFacade: SharedStoreFacade,
    ) {}
  
}