//interfaces
import { CompetitionsDTO } from "../../interfaces/competitions.interface";
import { BreedGroupDTO } from "../../interfaces/breed-group.iterface";
import { DescriptionDTO } from "../../interfaces/description.interface";
import { DogDTO } from "../../interfaces/dog.interface";


export interface DogState {
    dogs: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>[];
    rating: RatingState,
    filterParams: FilterParamsState,
    filterSize: FilterSizeState,
    sort: SortState,
    filterSingularity: FilterSingularityState;
    pagination: PaginationState,
};

export interface RatingState {
    title: string,
    like: number;
    dislike: number;
};

export interface SortState {
    sortKey: string;
};

export interface FilterParamsState {
    filterQuery: string;// строка для поиска
    filterBy: string[];// массив полей по которым необходимо искать
};

export interface FilterSizeState {
    parameterSize: string;
};

export interface FilterSingularityState {
    singularity: string;
};

export interface PaginationState {
    itemsPerPage: number;//количество элементов на каждой странице
    pageSizes: Array<number>;//по сколько выводить элементов на 
    currentPage: number;//текущая страница
    count: number;//всего страниц
};

export const INITIAL_DOG_STATE: DogState = {
    dogs: [],
    rating: {
        title: "",
        like: 0,
        dislike: 0
    },
    filterParams: {
        filterQuery: '',
        filterBy: [],
    },
    filterSize: {
        parameterSize: '',
    },
    sort: {
        sortKey: '',
    },
    filterSingularity: {
        singularity: '',
    },
    pagination: {
        itemsPerPage: 0,
        currentPage: 0,
        count: 0,
        pageSizes: [],
    },
};

export default interface DefaultDogState {
    dogs: DogState,
};