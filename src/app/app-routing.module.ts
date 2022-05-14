import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './modules/home/error/error.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(module => module.AuthModule)
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dogs',
        loadChildren: () => import('./modules/dogs/dogs.module').then(module => module.DogsModule),
      },
      {
        path: 'create-dog',
        loadChildren: () => import('./modules/dogs/components/create-dog/create-dog.module').then(module => module.CreateDogModule),
      },
      {
        path: 'edit-dog',
        loadChildren: () => import('./modules/dogs/components/edit-dog/edit-dog.module').then(module => module.EditDogModule),
      },
      {
        path: 'competitions',
        loadChildren: () => import('./modules/competitions/competitions.module').then(module => module.CompetitionsModule),
      },
      {
        path: 'breed-group',
        loadChildren: () => import('./modules/breed-group/breed-group.module').then(module => module.BreedGroupModule),
      },
      {
        path: 'game',
        loadChildren: () => import('./modules/game/game.module').then(module => module.GameModule),
      },
      {
        path: '',
        redirectTo: 'dogs',
        pathMatch: 'full',
      },
      { 
        path: 'error', 
        component: ErrorComponent 
      },
      { 
        path: '**', 
        redirectTo: '/error'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
