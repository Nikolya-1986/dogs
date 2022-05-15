import { CompetitionsDTO } from "./competitions.interface";
import { BreedGroupDTO } from "./breed-group.iterface";
import { LocationDTO } from "./location.interface";
import { Body } from "./enums/body.enum";

export interface DogsDTO {
    result: DogDTO<LocationDTO, CompetitionsDTO, BreedGroupDTO>
};

export interface DogDTO<L, C, G> {
    id: string,
    breed: string,
    size: Size,
    age: number,
    images: Array<string>,
    location: L,
    competitions: C,
    breedGroup: G,
};

export interface Size {
    body: Body,
    weight: string,
    height: string,
};
