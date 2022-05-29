import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
// RxJs
import { Observable, Subject, takeUntil } from 'rxjs';
// NgRx
import { DogStoreFacade } from '../../../../store/dog/dog.facade';
// interfaces
import { CompetitionsDTO } from "../../../../interfaces/competitions.interface";
import { BreedGroupDTO } from "../../../../interfaces/breed-group.iterface";
import { DescriptionDTO } from "../../../../interfaces/description.interface";
import { DogDTO } from "../../../../interfaces/dog.interface";

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss']
})
export class DogsListComponent implements OnInit, OnDestroy {

  public dogs$!: Observable<DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>[]>;
  public searchQuery = new FormControl('');

  private _destroy$: Subject<boolean> = new Subject();
  
  constructor(
    private _dogStoreFacade: DogStoreFacade,
  ) { }

  public ngOnInit(): void {
    this._fetchDogs();
  };

  public trackByFn(ind: number, item: any): number {
    return ind;
  };

  private _fetchDogs(): void {
    this._dogStoreFacade.loadDogs();
    this.dogs$ = this._dogStoreFacade.getDogs$;
    this.searchQuery.valueChanges.pipe(
      takeUntil(this._destroy$),
    )
    .subscribe((query: string) => this._dogStoreFacade.loadDogsByFilter(query));
  };

  public ngOnDestroy(): void {
    this._dogStoreFacade.resetDogsFilter();
    this._destroy$.next(true);
    this._destroy$.complete();
  };

}
