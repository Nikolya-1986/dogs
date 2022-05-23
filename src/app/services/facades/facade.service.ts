import { Injectable, Injector } from "@angular/core";
import { DogService } from "../dog.service";
import { ErrorService } from "../error.service";
import { catchError, delay, Observable, retry } from "rxjs";

import { CompetitionsDTO } from "../../interfaces/competitions.interface";
import { BreedGroupDTO } from "../../interfaces/breed-group.iterface";
import { DescriptionDTO } from "../../interfaces/description.interface";
import { DogDTO } from "../../interfaces/dog.interface";


@Injectable({
    providedIn: 'root',
})
export class FacadeService { 
    
    public get dogService(): DogService {
        if(!this._dogService) {
            this._dogService = this._injector.get(DogService);
        }
        return this._dogService;
    };

    public get errorService(): ErrorService {
        if(!this._errorService) {
            this._errorService = this._injector.get(ErrorService);
        }
        return this._errorService;
    };

    private _dogService!: DogService;
    private _errorService!: ErrorService;

    constructor(
        private _injector: Injector
    ) { }

    public getDogs(): Observable<DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>[]> {
        return this.dogService.getDogs().pipe(
            delay(3500),
            retry(3),
            catchError(this.errorService.errorsBackend.bind(this)),
        )
    };

}