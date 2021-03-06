import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output,  } from '@angular/core';

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
  @Input() public like!: string;
  @Input() public dislike!: string;
  @Output() public increaseRating = new EventEmitter<DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>>();
  @Output() public decreaseRating = new EventEmitter<DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>>();
  @Output() public dogDetail = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
    
  };

  public rotateImage(): void {
    this.rotated = (this.rotated === 'default' ? 'rotated' : 'default');
  };

  public scaleImage(state:string) :void {  
    this.scale = state;  
  }; 

  public onIncreaseRating(dog: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>): void {
    this.increaseRating.emit(dog)
  };

  public onDecreaseRating(dog: DogDTO<DescriptionDTO, CompetitionsDTO, BreedGroupDTO>): void {
    this.decreaseRating.emit(dog)
  }

  public goToDogDetail(id: string): void {
    this.dogDetail.emit(id);
  }

}
