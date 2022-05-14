import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateDogComponent } from './create-dog.component';

const routes: Routes = [
  {
    path: '',
    component: CreateDogComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateDogRoutingModule { }