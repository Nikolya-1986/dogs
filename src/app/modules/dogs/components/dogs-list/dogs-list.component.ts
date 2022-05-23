import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { CompetitionsDTO } from "../../../../interfaces/competitions.interface";
import { BreedGroupDTO } from "../../../../interfaces/breed-group.iterface";
import { DescriptionDTO } from "../../../../interfaces/description.interface";
import { DogDTO } from "../../../../interfaces/dog.interface";
import { DogStoreFacade } from '../../../../store/dog/dog.facade';


@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss']
})
export class DogsListComponent implements OnInit {

  public dogs$!: Observable<DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>[]> | any;

  constructor(
    private _dogStoreFacade: DogStoreFacade,
  ) { }

  public ngOnInit(): void {
    this._fetchDogs();
  };

  public trackByFn(ind: number, item: any): number {
    // console.log("Dogs id:", ind);
    return ind;
  };

  private _fetchDogs(): void {
    this._dogStoreFacade.loadDogs();
    this.dogs$ = this._dogStoreFacade.getDogs$;
  };

}
