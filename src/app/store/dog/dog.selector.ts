import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DogState } from "./dog.state";
import { BreedGroupDTO } from "../../interfaces/breed-group.iterface";
import { CompetitionsDTO } from "../../interfaces/competitions.interface";
import { DescriptionDTO } from "../../interfaces/description.interface";
import { DogDTO } from "../../interfaces/dog.interface";
import { Body } from "../../interfaces/enums/body.enum";


export const DOG_STATE_NAME = 'dog';

const dogState = createFeatureSelector<DogState>(DOG_STATE_NAME);

export const getDogs = createSelector(dogState,
    (state: DogState) => state.dogs,
);

export const getFilterParams = createSelector(dogState,
    (state: DogState) => state.filterParams,
);

export const getFilterSize = createSelector(dogState,
    (state: DogState) => state.filterSize,
);

export const getSortParams = createSelector(dogState,
    (state: DogState) => state.sortParams,
);

export const getFilterSingularity = createSelector(dogState,
    (state: DogState) => state.filterSingularity,
);

export const getDogsFilter = createSelector(
    getDogs,
    getFilterParams,
    getFilterSize,
    getSortParams,
    getFilterSingularity,
    (loadedDogs, filterParams, filterSize, sortParams, filterSingularity): DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>[] | any => {
        let dogs = loadedDogs;
        let filterQuery = filterParams.filterQuery;
        let filterBy = filterParams.filterBy;
        let parameterSize = filterSize.parameterSize;
        let sortKey = sortParams.sortKey
        let singularity = filterSingularity.singularity;

        if (filterQuery && filterQuery.trim().length > 0) {
            return _filteredDogs(dogs, filterQuery, filterBy);
        };
        if (parameterSize) {
            return _parameterSize(dogs, parameterSize);
        };
        if (sortKey) {
            return _sortParams(dogs, sortKey);
        };
        if (singularity) {
            return _dogsSingularity(dogs, singularity);
        };
        // else {
        //     return filteredDogs;
        // }
    }
);

export const getPagination = createSelector(dogState,
    (state: DogState) => state.pagination,
);


export function _filteredDogs(_dogs: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>[], _searchQuery: string, _fieldName: string[]):
    DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>[] {

    _dogs = _dogs.filter((dog: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO> | any) => {
        const lowerSearchQuery = _searchQuery.toLowerCase();
        const isIncludes = _fieldName.map((field) => {
            return dog[field].toLowerCase().includes(lowerSearchQuery);
        })
        .some((item) => item);
        return isIncludes;
    });
    return _dogs;
};

export function _parameterSize(_dogs: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>[], _size: string) {
    let _currentSizeDods = _size === Body.All ? _dogs : _dogs.filter(item => item.size.body === _size);
    return _currentSizeDods;
};

export function _sortParams(_dogs: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>[], _key: string):
    DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>[] {

    let _sortedDogs = _dogs.sort((
        a: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>, 
        b: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>
    ): any => {
        const param_a_id = Number(a.id.slice(0,3).match(/\d+/g));
        const param_b_id = Number(b.id.slice(0,3).match(/\d+/g));
        const param_a_height = Number(a.size.height.slice(0,2).match(/\d+/g));
        const param_b_height = Number(b.size.height.slice(0,2).match(/\d+/g));
        const param_a_weight = Number(a.size.weight.slice(0,2).match(/\d+/g));
        const param_b_weight= Number(b.size.weight.slice(0,2).match(/\d+/g));

        if (_key === 'Default') {                
            return _compare(param_b_id, param_a_id);
        }
        if (_key === 'Life long(Long-short)') {
            return _compare(a.age, b.age);
        }
        if (_key === 'Life long(Short-long)') {
            return _compare(b.age, a.age);
        }
        if (_key === 'Height(Tall-short)') {
            return _compare(param_a_height, param_b_height);
        }
        if (_key === 'Height(Short-tall)') {
            return _compare(param_b_height, param_a_height);
        }
        if (_key === 'Weight(Big-small)') {
            return _compare(param_a_weight, param_b_weight);
        }
        if (_key === 'Weight(Small-big)') {
            return _compare(param_b_weight, param_a_weight);
        }
        if (_key === 'Country(Alphabet(Aa-Zz)') {
            return _compare(b.country, a.country)
        }
        if (_key === 'Country(Alphabet(Zz-Aa)') {
            return _compare(a.country, b.country)
        }
    });
    return _sortedDogs;
};

export function _compare(a: number | string, b: number | string): number | string {

    if (a > b) {
      return -1;
    }
    else if ( a < b) {
      return 1;
    }
    else return 0;
};

export function _dogsSingularity(_dogs: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>[], _singularity: string): 
    DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>[] {
        
    return _dogs.filter((_dog: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>) => {
        if(_singularity === 'All Singularity') {
            return _dog;
        } else {
            const _singularities = _dog.singularity;
            const _isIncludesSingularity = _singularities.includes(_singularity);
            return _isIncludesSingularity;
        }
    });
}
