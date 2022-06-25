import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './dogs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { DogsRoutingModule } from './dogs-routing.module';
import { DogsListComponent } from './components/dogs-list/dogs-list.component';
import { DogsItemComponent } from './components/dogs-item/dogs-item.component';
import { DogsCardComponent } from './components/dogs-card/dogs-card.component';
import { DogsFilterComponent } from './components/dogs-filter/dogs-filter.component';
import { DogsPaginationComponent } from './components/dogs-pagination/dogs-pagination.component';
import { SingularityComponent } from './components/dogs-filter/components/singularity/singularity.component';


@NgModule({
  declarations: [
    DogsComponent,
    DogsListComponent,
    DogsItemComponent,
    DogsCardComponent,
    DogsFilterComponent,
    DogsPaginationComponent,
    SingularityComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DogsRoutingModule,
    NgxPaginationModule,
  ]
})
export class DogsModule { }
