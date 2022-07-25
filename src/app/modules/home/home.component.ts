import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { routerAnimation } from '../../animations/router-animation';
import { SharedStoreFacade } from '../../store/shared/shared.facade';
import { SharedState } from '../../store/shared/shared.state';
import { MenuItem } from '../../interfaces/menu.interfsce';
import { MenuService } from '../../services/menu.service';
import * as sharedActions from '../../store/shared/shared.actions';
import { LanguageFacade } from 'src/app/store/language/language.facade';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [
    routerAnimation
  ],
})
export class HomeComponent implements OnInit, AfterViewInit {

  public language$!: Observable<string>;
  public menuItems!: MenuItem[];
  public logo: string = 'assets/images/logo.jpg';
  public isLoading$!: Observable<boolean>;
  public errorMessage$!: Observable<string>;
  
  constructor(
    private _menuService: MenuService,
    private _storeShared: Store<SharedState>,
    private _sharedStoreFacade: SharedStoreFacade,
    private _changeRef: ChangeDetectorRef,
    private _languageFacade: LanguageFacade,
  ) {}

  public ngOnInit(): void {
    this.getMenuItems();
    this._loadStatus();
    this._getLanguages();
  };

  public ngAfterViewInit(): void {
    this._changeRef.detectChanges();
  }; 

  public getMenuItems(): void {
    this.menuItems = this._menuService.menuItems;
  };

  // public prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }

  public selectLanguage(language: string | any): void {
    this._languageFacade.setLanguage(language);

  };

  private _loadStatus(): void {
    this.isLoading$ = this._sharedStoreFacade.getLoadingSpinner$;
    this.errorMessage$ = this._sharedStoreFacade.getErrorMessage$;
    this._storeShared.dispatch(sharedActions.setLoadingSpinner({ status: true }));
  };

  private _getLanguages(): void {
    this.language$ = this._languageFacade.language$;
  }

  
}
