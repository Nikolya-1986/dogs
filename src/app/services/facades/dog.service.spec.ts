import { TestBed } from "@angular/core/testing";
import { DogService } from "../dog.service"
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { first, Observable } from "rxjs";
import { DogDTO } from "src/app/interfaces/dog.interface";
import { CompetitionsDTO } from "src/app/interfaces/competitions.interface";
import { BreedGroupDTO } from "src/app/interfaces/breed-group.iterface";
import { DescriptionDTO } from "src/app/interfaces/description.interface";

describe('DogService', () => {
    let dogService: DogService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule], 
            providers: [DogService],
        })

        dogService = TestBed.inject(DogService);
    })

    it('should be creste Dog Service', () => {
        expect(dogService).toBeDefined();
    })

    xit('should be return dogs', (done) => {
        const dogs = [{} as Observable<DogDTO<CompetitionsDTO, BreedGroupDTO, DescriptionDTO>[]> | any];
        dogService.getDogs().pipe(first()).subscribe((result) => {
            expect(result).toBe(dogs);
            done();
        }) 
    })
    
})






















// https://christianlydemann.com/the-complete-guide-to-ngrx-testing/
