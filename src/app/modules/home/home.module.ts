import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MenuService } from '../../services/menu.service';
import { HomeComponent } from './home.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { ErrorComponent } from './components/error/error.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { HttpClient } from '@angular/common/http';
import { ApplicationDirectivesModule } from 'src/app/directives/application-directives.module';


@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    ApplicationDirectivesModule,
  ],
  declarations: [
    HomeComponent, 
    HeaderMenuComponent, 
    ErrorComponent, 
    FooterComponent,
    LoadingSpinnerComponent,
  ],
  providers: [
    MenuService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}