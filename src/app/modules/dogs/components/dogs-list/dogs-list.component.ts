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
import { SingularityStoreFacade } from 'src/app/store/singularity/singularity.facade';
import * as dogsConstant from '../../dogs.constant';


@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss']
})
export class DogsListComponent implements OnInit, OnDestroy {

  public dogs$!: Observable<DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>[] | any>;
  public singularities$!: Observable<string[] | any>;
  public searchQuery = new FormControl('');
  public filterSize = new FormControl(Body.All);
  public bodySize: Body[] = [Body.All, Body.Average, Body.Large, Body.Little];
  public sortKeyForDogs = new FormControl('Default');
  public sortParaments: string[] = JSON.parse(JSON.stringify(dogsConstant.SORT_PARAMETRS_DOGS));
  public activeSingularity!: string;
  public pagination$!: any;
  public currentPage: number = 1;
  public count: number = 0;
  public itemsPerPage: number = 8;
  public pageSizes = [8, 16, 24, 32, 36];
  public like: string = 'assets/images/like.png';
  public dislike: string = 'assets/images/dislike.png';

  private _destroy$: Subject<boolean> = new Subject();

  constructor(
    private _dogStoreFacade: DogStoreFacade,
    private _singularityStoreFacade: SingularityStoreFacade,
  ) { }

  public ngOnInit(): void {
    this._fetchDogs();
    this._fetchSingularities();
    this._fetchPaginatoinPage();
  };

  public ngOnDestroy(): void {
    this._dogStoreFacade.resetDogsFilter();
    this._destroy$.next(true);
    this._destroy$.complete();
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

  public onCurrentSingularity(singularity: string): void {
    this.activeSingularity = singularity;
    this._dogStoreFacade.loadDogsByFilterSingularity(this.activeSingularity);
  };

  public onIncreaseRaiting(id: string): void { 
    this._dogStoreFacade.loadIncreaseRating(id);
  };
 
  public onDecreaseRating(id: string): void {
    this._dogStoreFacade.loadDislikeRaiting(id);
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

  private _fetchSingularities(): void {
    this._singularityStoreFacade.loadSingularities();
    this.singularities$ = this._singularityStoreFacade.singularities$;
    this.singularities$
    .pipe(
      takeUntil(this._destroy$),
    )
    .subscribe((singularities) => {
      if(!this.activeSingularity) {
        this.activeSingularity = singularities[0];
        this.onCurrentSingularity(this.activeSingularity);
      }
    })
  };

}
