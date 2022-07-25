import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { SingularityState } from "./singularity.state";
import * as singularityActions from "./singularity.actions";
import { getSingularities } from "./singularity.selector";


@Injectable({ 
    providedIn: 'root' 
})
export class SingularityStoreFacade {

    public readonly singularities$ = this._singularityStore.pipe(select(getSingularities));

    constructor(
        private _singularityStore: Store<SingularityState>,
    ){}

    public loadSingularities(): void {
        this._singularityStore.dispatch(singularityActions.loadSingularitiesRequest());
    };
}