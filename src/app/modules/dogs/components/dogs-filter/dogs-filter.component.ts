import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Body } from '../../../../interfaces/enums/body.enum';

@Component({
  selector: 'app-dogs-filter',
  templateUrl: './dogs-filter.component.html',
  styleUrls: ['./dogs-filter.component.scss']
})
export class DogsFilterComponent implements OnInit {

  @Input() public searchQuery = new FormControl;
  @Input() public filterSize = new FormControl;
  @Input() public bodySize!: Body[];
  @Input() public sortKeyForDogs = new FormControl;
  @Input() public sortParaments!: string[];
  @Input() public singularities!: Array<string>;
  @Input() public activeSingularity!: string;
  @Output() public currentSingularity = new EventEmitter<string>();

  constructor() { }

  public ngOnInit(): void {
    
  };

  public onCurrentSingularity(singularity: string): void {
    this.currentSingularity.emit(singularity);
  }

}
