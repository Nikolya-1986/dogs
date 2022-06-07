import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dogs-filter',
  templateUrl: './dogs-filter.component.html',
  styleUrls: ['./dogs-filter.component.scss']
})
export class DogsFilterComponent implements OnInit {

  @Input() public searchQuery = new FormControl;
  @Input() public sortKeyForDogs = new FormControl;
  @Input() public filterNumberDogs!: string[];
 
  constructor() { }

  public ngOnInit(): void {
  };


}
