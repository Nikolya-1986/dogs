import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dogs-pagination',
  templateUrl: './dogs-pagination.component.html',
})
export class DogsPaginationComponent implements OnInit {

  @Input() public pageSizes!: Array<number>;
  @Input() public itemsPerPage!: number;
  @Input() public currentPage!: number;
  @Output() public currentCountPageSize = new EventEmitter<number>();
  @Output() public currentPageChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public handlePageSizeChange(event: any ): void {
    this.itemsPerPage = event.target.value;
    this.currentCountPageSize.emit(this.itemsPerPage)
  };

  public handlePageChange(event: number): void{
    this.currentPage = event;
    this.currentPageChange.emit(this.currentPage)
  };

}
