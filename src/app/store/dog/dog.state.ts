import { CompetitionsDTO } from "../../interfaces/competitions.interface";
import { BreedGroupDTO } from "../../interfaces/breed-group.iterface";
import { LocationDTO } from "../../interfaces/location.interface";
import { DogDTO } from "../../interfaces/dog.interface";


export interface DogState {
    dogs: DogDTO<CompetitionsDTO, BreedGroupDTO, LocationDTO>[],
};

export const initialDogState: DogState = {
    dogs: [],
};

export default interface DefaultDogState {
    dogs: DogState,
};