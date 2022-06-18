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
  @Input() public sortKeyForDogs = new FormControl;
  @Input() public filterNumberDogs!: string[];
  @Input() public bodySize!: Body[];
 
  constructor() { }

  public ngOnInit(): void {
  };


}
