import { Store } from "@ngrx/store";
import { DogState } from "../dog.state";
import { 
    DogActionsType, 
    loadDogsRequest, 
    loadDogsSuccess, 
    setByFilterParams 
} from "./dog.actions";

describe('DogsActions', () => {

    it('should dispatch load dogs request action', () => {
      const expectedAction = loadDogsRequest();
      expect(expectedAction).toEqual({ type: DogActionsType.LOAD_DOGS_REQUEST })
    });

    // it('should dispatch load dogs success action', () => {
    //     const getDogs = [{} as DogState];
    //     const expectedAction = loadDogsSuccess(getDogs);
    //     expect(expectedAction).toEqual({ type: DogActionsType.LOAD_DOGS_SUCCESS })
    // })

    it('should dispatch set filter by properties and query action', () => {
        const expectedAction = setByFilterParams({ filterParams: { filterBy: ['breed', 'country'], filterQuery: 'Doberman' }});
        const store = jasmine.createSpyObj<Store<DogState>>('store', ['dispatch']);
        expect(store.dispatch).toEqual(expectedAction)
    })
});