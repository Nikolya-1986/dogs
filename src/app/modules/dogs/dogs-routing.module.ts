import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DogsItemComponent } from './components/dogs-item/dogs-item.component';
import { DogsListComponent } from './components/dogs-list/dogs-list.component';
import { DogsComponent } from './dogs.component';

const routes: Routes = [
  {
    path: '',
    component: DogsComponent,
    children: [
      {
        path: '',
        component: DogsListComponent,
      },
      {
        path: ':id',
        component: DogsItemComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogsRoutingModule { }