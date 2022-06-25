// @ngrx
import { Action, createReducer, on } from "@ngrx/store";
import * as dogActions from "./dog.actions";
import * as dogState from "./dog.state";
// interfaces
import { BreedGroupDTO } from "../../interfaces/breed-group.iterface";
import { CompetitionsDTO } from "../../interfaces/competitions.interface";
import { DescriptionDTO } from "../../interfaces/description.interface";
import { DogDTO } from "../../interfaces/dog.interface";
import { Body } from "src/app/interfaces/enums/body.enum";


const _dogReduserInternal = createReducer(
    dogState.INITIAL_DOG_STATE,
    on(dogActions.loadDogsRequest, (state) => ({
        ...state,
    })),
    on(dogActions.loadDogsSuccess, (state, action) => ({
        ...state,
        dogs: [...state.dogs, ...action.dogs],
    })),
    on(dogActions.setByFilterParams, (state, { filters }) => {

        let filteredDogs = [...state.dogs];
        const searchQueryForDog = filters.filterQuery;
        const fiterByField = filters.filterBy;
        if (searchQueryForDog.trim()) {
            filteredDogs = filteredDogs.filter((dog: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO> | any) => {
                const lowerFilterQuery = searchQueryForDog.toLowerCase();
                const result = fiterByField.map((fieldSort: string) => {
                    return dog[fieldSort].toLowerCase().includes(lowerFilterQuery);
                })
                .some((item) => item);
                return result;
            })
        } 
        return {
            ...state,
            dogs: [...filteredDogs],
            filterQuery: searchQueryForDog, 
            filterBy: fiterByField,
        }
    }),
    on(dogActions.setByFilterSize, (state, { filterSize }) => {
        let dogs = [...state.dogs];
        const currentSize = filterSize.parameterSize;
        let currentSizeDods = currentSize === Body.All ? dogs : dogs.filter(item => item.size.body === currentSize);
        return {
            ...state,
            dogs: [...currentSizeDods],
            filterSize: {
                parameterSize: currentSize,
            }
        }
    }),
    on(dogActions.setSortKey, (state, { sort }) => {
        const sortKey = sort.sortKey;
        let sortedDogs = [...state.dogs].sort((
            a: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>, 
            b: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>
        ): any => {
            const param_a_id = Number(a.id.slice(0,3).match(/\d+/g));
            const param_b_id = Number(b.id.slice(0,3).match(/\d+/g));
            const param_a_height = Number(a.size.height.slice(0,2).match(/\d+/g));
            const param_b_height = Number(b.size.height.slice(0,2).match(/\d+/g));
            const param_a_weight = Number(a.size.weight.slice(0,2).match(/\d+/g));
            const param_b_weight= Number(b.size.weight.slice(0,2).match(/\d+/g));
            if (sortKey === 'Default') {                
                return compare(param_b_id, param_a_id);
            }
            if (sortKey === 'Life long(Long-short)') {
                return compare(a.age, b.age);
            }
            if (sortKey === 'Life long(Short-long)') {
                return compare(b.age, a.age);
            }
            if (sortKey === 'Height(Tall-short)') {
                return compare(param_a_height, param_b_height);
            }
            if (sortKey === 'Height(Short-tall)') {
                return compare(param_b_height, param_a_height);
            }
            if (sortKey === 'Weight(Big-small)') {
                return compare(param_a_weight, param_b_weight);
            }
            if (sortKey === 'Weight(Small-big)') {
                return compare(param_b_weight, param_a_weight);
            }
            if (sortKey === 'Country(Alphabet(Aa-Zz)') {
                return compare(b.country, a.country)
            }
            if (sortKey === 'Country(Alphabet(Zz-Aa)') {
                return compare(a.country, b.country)
            }
        })
        return {
            ...state,
            dogs: [...sortedDogs],
            sort: {
                sortKey: sortKey,
            },
        }
    }),
    on(dogActions.setFilterSingularity, (state, { filterSingularity }) => {
        const dogs = [...state.dogs];
        const singularity = filterSingularity.singularity;
        const dogsSingularity = dogs.filter((dogs: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>) => {
            if(singularity === 'All Singularity') {
                return dogs;
            } 
            else {
                const singularities = dogs.singularity;
                const isIncludesSingularity = singularities.includes(singularity);
                return isIncludesSingularity;
            }
        })
        
        return {
            ...state,
            dogs: [...dogsSingularity],
            filterSingularity: {
                singularity: singularity,
            }
        }
    }),


    on(dogActions.setPaginationPage, (state, { pagination }) => {
        return {
            ...state,
            pagination: pagination
        }
    }),
    on(dogActions.resetDogsStore, (state) => ({
        ...state,
        ...dogState.INITIAL_DOG_STATE,
    }))
);

export function compare(a: number | string, b: number | string) {

    if (a > b) {
      return -1;
    }
    else if ( a < b) {
      return 1;
    }
    else return 0;
};

export function DogReducer(state: dogState.DogState | undefined, action: Action) {
    return _dogReduserInternal(state, action);
};