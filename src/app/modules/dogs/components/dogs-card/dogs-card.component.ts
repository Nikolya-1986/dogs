import { ChangeDetectionStrategy, Component, Input, OnInit,  } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { CompetitionsDTO } from "../../../../interfaces/competitions.interface";
import { BreedGroupDTO } from "../../../../interfaces/breed-group.iterface";
import { DescriptionDTO } from "../../../../interfaces/description.interface";
import { DogDTO } from "../../../../interfaces/dog.interface";
import { Animations } from 'src/app/animations/animations';


@Component({
  selector: 'app-dogs-card',
  templateUrl: './dogs-card.component.html',
  styleUrls: ['./dogs-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [ Animations.animations ]
})
export class DogsCardComponent implements OnInit {
  
  @Input() dog!: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>;
  @Input() public rotated: string = 'default';
  @Input() public scale: string = "rest";  
  
  constructor() { }

  ngOnInit(): void {
    
  };

  public rotateImage(): void {
    this.rotated = (this.rotated === 'default' ? 'rotated' : 'default');
  };

  public scaleImage(state:string) :void {  
    this.scale = state;  
  }; 

}
