import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
// RxJs
import { combineLatest, Observable, startWith, Subject, takeUntil } from 'rxjs';
// NgRx
import { DogStoreFacade } from '../../../../store/dog/dog.facade';
// interfaces
import { CompetitionsDTO } from "../../../../interfaces/competitions.interface";
import { BreedGroupDTO } from "../../../../interfaces/breed-group.iterface";
import { DescriptionDTO } from "../../../../interfaces/description.interface";
import { DogDTO } from "../../../../interfaces/dog.interface";
import { Body } from "../../../../interfaces/enums/body.enum";
import * as dogs from '../../dogs.constant';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss']
})
export class DogsListComponent implements OnInit, OnDestroy {

  public dogs$!: Observable<DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>[] | any>;
  public searchQuery = new FormControl('');
  public filterSize = new FormControl(Body.All);
  public sortKeyForDogs = new FormControl('Default');
  public pagination$!: any;
  public bodySize: Body[] = [Body.All, Body.Average, Body.Large, Body.Little];
  public filterNumberDogs: string[] = JSON.parse(JSON.stringify(dogs.FILTER_NUMBER_DOGS));
  public currentPage: number = 1;
  public count: number = 0;
  public itemsPerPage: number = 8;
  public pageSizes = [8, 16, 24, 32, 36];

  private _destroy$: Subject<boolean> = new Subject();

  constructor(
    private _dogStoreFacade: DogStoreFacade,
  ) { }

  public ngOnInit(): void {
    this._fetchDogs();
    this._fetchPaginatoinPage();
  };

  public trackByFn(ind: number, item: any): number {
    return ind;
  };

  public onCurrentCountPageSize(event: number): void {
    this.itemsPerPage = event;
    this.currentPage = 1;
  };

  public onCurrentPageChange(event: number): void {
    this.currentPage = event;
  };

  private _fetchPaginatoinPage(): void {
    const pagination = {
      itemsPerPage: this.itemsPerPage,
      currentPage: this.currentPage,
      count: this.count,
      pageSizes: this.pageSizes
    }
    this._dogStoreFacade.loadPagination(pagination);
    this.pagination$ = this._dogStoreFacade.pagination$;
  };

  private _fetchDogs(): void {
    this._dogStoreFacade.loadDogs();
    this.dogs$ = this._dogStoreFacade.dogs$;
    const searchQuery$ = this.searchQuery.valueChanges.pipe(startWith(''));
    const filterSize$ = this.filterSize.valueChanges.pipe(startWith('All'));
    const sortKeyForDogs$ = this.sortKeyForDogs.valueChanges.pipe(startWith(''));
    combineLatest([searchQuery$, filterSize$, sortKeyForDogs$])
    .pipe(
      takeUntil(this._destroy$),
    )
    .subscribe(([query, size, sort]) => {
      this._dogStoreFacade.loadDogsByFilter(query);
      this._dogStoreFacade.loadDogsByFilterSize(size);
      this._dogStoreFacade.loadDogsSortKey(sort);
    })
  };

  public ngOnDestroy(): void {
    this._dogStoreFacade.resetDogsFilter();
    this._destroy$.next(true);
    this._destroy$.complete();
  };

}




// You probably want to have an initial value for both Observables. combineLatest will only emit if all Observables have emitted at least one value. 
//Use the startWith operator to create this behaviour, like this:

// combineLatest(
//     this.toppings.valueChanges.pipe(startWith("")), 
//     this.toppings2.valueChanges.pipe(startWith("")))

// Or, if you have initial values available, like suggested:

// combineLatest(
//     this.toppings.valueChanges.pipe(startWith(this.toppings.value)), 
//     this.toppings2.valueChanges.pipe(startWith(this.toppings2.value)))