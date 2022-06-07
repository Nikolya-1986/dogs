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
import * as dogs from '../../dogs.constant';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss']
})
export class DogsListComponent implements OnInit, OnDestroy {

  public dogs$!: Observable<DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>[] | any>;
  public pagination$!: any;
  public searchQuery = new FormControl('');
  public sortKeyForDogs = new FormControl('Default');
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
    this.searchQuery.valueChanges.pipe(
      takeUntil(this._destroy$),
    )
    .subscribe((query: string) => this._dogStoreFacade.loadDogsByFilter(query));

    this.sortKeyForDogs.valueChanges.pipe(
      takeUntil(this._destroy$),
    )
    .subscribe((sort: string) => this._dogStoreFacade.loadDogsSortKey(sort));
  };

  public ngOnDestroy(): void {
    this._dogStoreFacade.resetDogsFilter();
    this._destroy$.next(true);
    this._destroy$.complete();
  };

}
