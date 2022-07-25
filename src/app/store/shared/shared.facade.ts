import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { SharedState } from "../shared/shared.state";
import * as sharedSelector from "../shared/shared.selector";
import * as sharesActions from "./shared.actions";


@Injectable({ 
    providedIn: 'root' 
})
export class SharedStoreFacade {
    
    public getLoadingSpinner$: Observable<boolean> = this._sharedStore.pipe(select(sharedSelector.getLoadingSpinner));
    public getErrorMessage$: Observable<string> = this._sharedStore.pipe(select(sharedSelector.getErrorMessage));

    constructor(
        private _sharedStore: Store<SharedState>
    ){}

    public getLoadingSpinner(status: boolean): void {
        this._sharedStore.dispatch(sharesActions.setLoadingSpinner({ status: false }))
    };

    public getErrorMessage(message: string): void {
        this._sharedStore.dispatch(sharesActions.setErrorMessage({ message: '' }))
    };

}