import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BreedGroupComponent } from './breed-group.component';
import { BreedGroupRoutingModule } from './breed-group-routing.module';


@NgModule({
  declarations: [
    BreedGroupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BreedGroupRoutingModule,
  ]
})
export class BreedGroupModule { }
