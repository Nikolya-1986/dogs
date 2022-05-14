import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EditDogComponent } from './edit-dog.component';
import { EditDogRoutingModule } from './edit-dog-routing.module';


@NgModule({
  declarations: [
    EditDogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EditDogRoutingModule
  ]
})
export class EditDogModule { }