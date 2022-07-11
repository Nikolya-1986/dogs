import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";

import { DogState } from "./dog.state";
import { CompetitionsDTO } from "../../interfaces/competitions.interface";
import { BreedGroupDTO } from "../../interfaces/breed-group.iterface";
import { DescriptionDTO } from "../../interfaces/description.interface";
import { DogDTO } from "../../interfaces/dog.interface";
import * as dogSelector from "./dog.selector";
import * as dogActions from "./dog.actions";


@Injectable({ 
    providedIn: 'root' 
})
export class DogStoreFacade {
    
    public readonly dogs$ = this._dogStore.pipe(select(dogSelector.getDogsFilter));
    public readonly pagination$ = this._dogStore.pipe(select(dogSelector.getPagination));

    constructor(
        private _dogStore: Store<DogState>,
    ){}

    public loadDogs(): void {
        this._dogStore.dispatch(dogActions.loadDogsRequest());
    };

    public loadDogsByFilter(query: string): void {
        this._dogStore.dispatch(dogActions.setByFilterParams( { filterParams: { filterBy: ['breed', 'country'], filterQuery: query }}));
    };

    public loadDogsByFilterSize(size: string): void {
        this._dogStore.dispatch(dogActions.setByFilterSize( { filterSize: { parameterSize: size }}));
    };

    public loadDogsSortKey(sortKey: string): void {
        this._dogStore.dispatch(dogActions.setSortKey({ sortParams: { sortKey } }));
    };

    public loadDogsByFilterSingularity(singularity: string): void {
        this._dogStore.dispatch(dogActions.setFilterSingularity({ filterSingularity: { singularity }}));
    };

    public loadPagination(pagination: { itemsPerPage: number; currentPage: number; count: number; pageSizes: number[] }): void {
        this._dogStore.dispatch(dogActions.setPaginationPage( { pagination }));
    };

    public increaseDogRating(dog : DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>): void {
        this._dogStore.dispatch(dogActions.increaseDogRatingRequest({ dog }));
    };

    public decreaseDogRating(dog: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>): void {
        this._dogStore.dispatch(dogActions.decreaseDogRatingRequest({ dog }));
    };

    public resetDogsFilter(): void {
        this._dogStore.dispatch(dogActions.resetDogsStore());
    };
     
}