import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { CompetitionsDTO } from "../../../../interfaces/competitions.interface";
import { BreedGroupDTO } from "../../../../interfaces/breed-group.iterface";
import { LocationDTO } from "../../../../interfaces/location.interface";
import { DogDTO } from "../../../../interfaces/dog.interface";

@Component({
  selector: 'app-dogs-card',
  templateUrl: './dogs-card.component.html',
  styleUrls: ['./dogs-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DogsCardComponent implements OnInit {

  @Input() dog!: DogDTO<CompetitionsDTO, LocationDTO, BreedGroupDTO>;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
