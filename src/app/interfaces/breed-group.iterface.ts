import { Variety } from "./enums/variety.enum";

export interface BreedGroupDTO {
    id: string,
};

export interface BreedGroup {
    id: string,
    type: string,
    variety: Variety,
    image: string,
    residents: Array<string>,
};