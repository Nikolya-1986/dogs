import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";

import { DogState } from "./dog.state";
import * as dogSelector from "./dog.selector";
import * as dogActions from "./dog.actions";


@Injectable({ 
    providedIn: 'root' 
})
export class DogStoreFacade {
    
    public getDogs$ = this._dogStore.pipe(select(dogSelector.getDogs));

    constructor(
        private _dogStore: Store<DogState>,
    ){}

    public loadDogs(): void {
        this._dogStore.dispatch(dogActions.loadDogsRequest());
    };

    public loadDogsByFilter(query: string): void {
        this._dogStore.dispatch(dogActions.setByFilter( { filters: { filterBy: ['breed', 'country', 'singularity'], query }}));
    };

    public resetDogsFilter(): void {
        this._dogStore.dispatch(dogActions.resetDogsStore());
    };
     
}