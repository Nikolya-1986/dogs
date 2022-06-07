import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";

import { DogState } from "./dog.state";
import * as dogSelector from "./dog.selector";
import * as dogActions from "./dog.actions";


@Injectable({ 
    providedIn: 'root' 
})
export class DogStoreFacade {
    
    public readonly dogs$ = this._dogStore.pipe(select(dogSelector.getDogs));
    public readonly pagination$ = this._dogStore.pipe(select(dogSelector.getPagination));

    constructor(
        private _dogStore: Store<DogState>,
    ){}

    public loadDogs(): void {
        this._dogStore.dispatch(dogActions.loadDogsRequest());
    };

    public loadDogsByFilter(query: string): void {
        this._dogStore.dispatch(dogActions.setByFilter( { filters: { filterBy: ['breed', 'country', 'singularity'], filterQuery: query }}));
    };

    public loadDogsSortKey(sortKey: string): void {
        this._dogStore.dispatch(dogActions.setSortKey({ sortKey }));
    };

    public loadPagination(pagination: { itemsPerPage: number; currentPage: number; count: number; pageSizes: number[] }): void {
        this._dogStore.dispatch(dogActions.setPaginationPage( { pagination }))
    };

    public resetDogsFilter(): void {
        this._dogStore.dispatch(dogActions.resetDogsStore());
    };
     
}