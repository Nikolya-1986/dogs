import { CompetitionsDTO } from "./competitions.interface";
import { BreedGroupDTO } from "./breed-group.iterface";
import { DescriptionDTO } from "./description.interface";
import { BodyEnumStrings } from "./enums/body.enum";
import { CountryEnumStrings } from "./enums/country.enum";

export interface DogsDTO {
    result: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>
};

export interface DogDTO<D, C, G> {
    id: string,
    breed: string,
    country: CountryEnumStrings,
    singularity: Array<string>,
    size: Size,
    age: number,
    images: Array<string>,
    description: D,
    competitions: C,
    breedGroup: G,
};

export interface Size {
    body: BodyEnumStrings,
    weight: string,
    height: string,
};
