import { CompetitionsDTO } from "./competitions.interface";
import { BreedGroupDTO } from "./breed-group.iterface";
import { DescriptionDTO } from "./description.interface";
import { Body } from "./enums/body.enum";
import { Country } from "./enums/country.enum";

export interface DogsDTO {
    result: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>
};

export interface DogDTO<D, C, G> {
    id: string,
    breed: string,
    country: Country,
    size: Size,
    age: number,
    images: Array<string>,
    description: D,
    competitions: C,
    breedGroup: G,
};

export interface Size {
    body: Body,
    weight: string,
    height: string,
};
