import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { CompetitionsDTO } from "../interfaces/competitions.interface";
import { BreedGroupDTO } from "../interfaces/breed-group.iterface";
import { LocationDTO } from "../interfaces/location.interface";
import { DogDTO } from "../interfaces/dog.interface";


@Injectable({
    providedIn: 'root',
})
export class DogService {

    private readonly BASE_URL = ' http://localhost:3000';

    constructor(
        private _httpClient: HttpClient,
    ) {}

    public getDogs(): Observable<DogDTO<CompetitionsDTO, BreedGroupDTO, LocationDTO>[]> {
        return this._httpClient.get<DogDTO<CompetitionsDTO, BreedGroupDTO, LocationDTO>[]>(`${this.BASE_URL}/dogs`);
    };

}