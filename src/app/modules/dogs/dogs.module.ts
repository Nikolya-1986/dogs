import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './dogs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DogsRoutingModule } from './dogs-routing.module';
import { DogsListComponent } from './components/dogs-list/dogs-list.component';
import { DogsItemComponent } from './components/dogs-item/dogs-item.component';
import { DogsCardComponent } from './components/dogs-card/dogs-card.component';


@NgModule({
  declarations: [
    DogsComponent,
    DogsListComponent,
    DogsItemComponent,
    DogsCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DogsRoutingModule
  ]
})
export class DogsModule { }
