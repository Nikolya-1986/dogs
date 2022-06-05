//interfaces
import { CompetitionsDTO } from "../../interfaces/competitions.interface";
import { BreedGroupDTO } from "../../interfaces/breed-group.iterface";
import { DescriptionDTO } from "../../interfaces/description.interface";
import { DogDTO } from "../../interfaces/dog.interface";


export interface DogState {
    dogs: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>[];
    filtres: FilterState,
    sort: SortState,
    pagination: PaginationState,
};

export interface SortState {
    sortDirection: string;
    sortKey: string;
};

export interface FilterState {
    filterQuery: string;// строка для поиска
    filterBy: string[];// массив полей по которым необходимо искать
};

export interface PaginationState {
    itemsPerPage: number;//количество элементов на каждой странице
    pageSizes: Array<number>;//по сколько выводить элементов на 
    currentPage: number;//текущая страница
    count: number;//всего страниц
};

export const INITIAL_DOG_STATE: DogState = {
    dogs: [],
    filtres: {
        filterQuery: '',
        filterBy: [],
    },
    sort: {
        sortDirection: '',
        sortKey: '',
    },
    pagination: {
        itemsPerPage: 0,
        currentPage: 0,
        count: 0,
        pageSizes: [],
    }
};

export default interface DefaultDogState {
    dogs: DogState,
};