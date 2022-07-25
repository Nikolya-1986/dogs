import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-singularity',
  templateUrl: './singularity.component.html',
  styleUrls: ['./singularity.component.scss']
})
export class SingularityComponent implements OnInit {

  @Input() public singularity!: string;
  @Input('activeSingularity') set activeSingularity(value: string){
    this.isActive = this.singularity === value;
  };
  @Output() public currentSingularity = new EventEmitter<string>();
  public isActive!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  public selectSingularity(): void {
    this.currentSingularity.emit(this.singularity);
  }

}
