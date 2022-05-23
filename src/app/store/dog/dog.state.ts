import { CompetitionsDTO } from "../../interfaces/competitions.interface";
import { BreedGroupDTO } from "../../interfaces/breed-group.iterface";
import { DescriptionDTO } from "../../interfaces/description.interface";
import { DogDTO } from "../../interfaces/dog.interface";


export interface DogState {
    dogs: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>[],
};

export const initialDogState: DogState = {
    dogs: [],
};

export default interface DefaultDogState {
    dogs: DogState,
};