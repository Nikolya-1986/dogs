import { KindSport } from "./enums/kind-sport.interface";

export interface CompetitionsDTO {
    id: string,
};

export interface Competitions {
    id: string,
    kindSport: KindSport,
    description: string,
    image: string,
};