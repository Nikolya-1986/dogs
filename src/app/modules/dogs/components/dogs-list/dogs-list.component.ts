import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { CompetitionsDTO } from "../../../../interfaces/competitions.interface";
import { BreedGroupDTO } from "../../../../interfaces/breed-group.iterface";
import { LocationDTO } from "../../../../interfaces/location.interface";
import { DogDTO } from "../../../../interfaces/dog.interface";
import { FacadeService } from '../../../../services/facades/facade.service';


@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss']
})
export class DogsListComponent implements OnInit {

  public dogs$!: Observable<DogDTO<CompetitionsDTO, LocationDTO, BreedGroupDTO>[]> | any;

  constructor(
    private _facade: FacadeService,
  ) { }

  public ngOnInit(): void {
    this._fetchDogs();
  };

  public trackByFn(ind: number, item: any): number {
    console.log("Dogs id:", ind);
    return ind;
  };

  private _fetchDogs(): DogDTO<CompetitionsDTO, LocationDTO, BreedGroupDTO>[] | any {
    return this.dogs$ = this._facade.getDogs()
    .pipe(
      tap((dogs: DogDTO<CompetitionsDTO, BreedGroupDTO, LocationDTO>[]) => console.log(dogs),
      )
    )
  };

}
