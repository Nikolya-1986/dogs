//interfaces
import { CompetitionsDTO } from "../../interfaces/competitions.interface";
import { BreedGroupDTO } from "../../interfaces/breed-group.iterface";
import { DescriptionDTO } from "../../interfaces/description.interface";
import { DogDTO } from "../../interfaces/dog.interface";


export interface DogState {
    dogs: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>[],
    filterQuery: string;
    filterBy: string[];
};

export const INITIAL_DOG_STATE: DogState = {
    dogs: [],
    filterQuery: '', 
    filterBy: [] 
};

export default interface DefaultDogState {
    dogs: DogState,
};