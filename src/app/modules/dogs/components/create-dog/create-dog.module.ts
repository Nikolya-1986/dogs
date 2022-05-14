import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateDogComponent } from './create-dog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateDogRoutingModule } from './create-dog-routing.module';


@NgModule({
  declarations: [
    CreateDogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreateDogRoutingModule
  ]
})
export class CreateDogModule { }
