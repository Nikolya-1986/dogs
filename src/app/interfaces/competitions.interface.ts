import { KindSportEnumStrings } from "./enums/kind-sport.interface";

export interface CompetitionsDTO {
    id: string,
};

export interface Competitions {
    id: string,
    kindSport: KindSportEnumStrings,
    description: string,
    image: string,
};