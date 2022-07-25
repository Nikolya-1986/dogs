import { VarietyEnumStrings } from "./enums/variety.enum";

export interface BreedGroupDTO {
    id: string,
};

export interface BreedGroup {
    id: string,
    type: string,
    variety: VarietyEnumStrings,
    image: string,
    residents: Array<string>,
};