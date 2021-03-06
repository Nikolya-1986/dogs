import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { CompetitionsDTO } from "../interfaces/competitions.interface";
import { BreedGroupDTO } from "../interfaces/breed-group.iterface";
import { DescriptionDTO } from "../interfaces/description.interface";
import { DogDTO, Rating } from "../interfaces/dog.interface";


@Injectable({
    providedIn: 'root',
})
export class DogService {

    private readonly BASE_URL = ' http://localhost:3000';

    constructor(
        private _httpClient: HttpClient,
    ) {}

    public getDogs(): Observable<DogDTO<CompetitionsDTO, BreedGroupDTO, DescriptionDTO>[]> {
        return this._httpClient.get<DogDTO<CompetitionsDTO, BreedGroupDTO, DescriptionDTO>[]>(`${this.BASE_URL}/dogs`);
    };

    public updateDogRating(dog: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>): 
        Observable<DogDTO<CompetitionsDTO, BreedGroupDTO, DescriptionDTO>> {
            
        return this._httpClient.put<DogDTO<CompetitionsDTO, BreedGroupDTO, DescriptionDTO>>
            (`${this.BASE_URL}/dogs/${dog.id}`, JSON.stringify(dog), this._httpHeader);
    };

    private _httpHeader = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    }

}