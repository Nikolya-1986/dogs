import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditDogComponent } from './edit-dog.component';

const routes: Routes = [
  {
    path: '',
    component: EditDogComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDogRoutingModule { }