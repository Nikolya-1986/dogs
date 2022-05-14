import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MenuService } from '../../services/menu.service';
import { HomeComponent } from './home.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule 
  ],
  declarations: [
    HomeComponent, 
    HeaderMenuComponent, 
    ErrorComponent, 
    FooterComponent,
  ],
  providers: [
    MenuService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
