import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameComponent } from './game.component';
import { FormsModule } from '@angular/forms';
import { GameRoutingModule } from './game-routing.module';


@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GameRoutingModule,
  ]
})
export class GameModule { }
