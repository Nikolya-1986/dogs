import { ChangeDetectionStrategy, Component, Input, OnInit,  } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { CompetitionsDTO } from "../../../../interfaces/competitions.interface";
import { BreedGroupDTO } from "../../../../interfaces/breed-group.iterface";
import { LocationDTO } from "../../../../interfaces/location.interface";
import { DogDTO } from "../../../../interfaces/dog.interface";


@Component({
  selector: 'app-dogs-card',
  templateUrl: './dogs-card.component.html',
  styleUrls: ['./dogs-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-180deg)' })),
      transition('rotated => default', animate('1500ms ease-out')),
      transition('default => rotated', animate('400ms ease-in'))
    ])
  ]
})
export class DogsCardComponent implements OnInit {
  
  @Input() dog!: DogDTO<CompetitionsDTO, LocationDTO, BreedGroupDTO>;
  
  public state: string = 'default';

  constructor() { }

  ngOnInit(): void {
    
  };

  public rotate(): void {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
  };

}
