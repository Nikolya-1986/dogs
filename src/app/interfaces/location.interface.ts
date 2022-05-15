import { Country } from "./enums/country.enum";

export interface LocationDTO {
    url: string,
};

export interface Location {
    id: string,
    url: string,
    country: Country,
    character: string,
    care: string,
    conditionsDetention: string
};