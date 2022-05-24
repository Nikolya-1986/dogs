import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { routerAnimation } from '../../animations/router-animation';
import { SharedStoreFacade } from '../../store/shared/shared.facade';
import { SharedState } from '../../store/shared/shared.state';

import { MenuItem } from '../../interfaces/menu.interfsce';
import { MenuService } from '../../services/menu.service';
import * as sharedActions from '../../store/shared/shared.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [
    routerAnimation
  ],
})
export class HomeComponent implements OnInit {

  public menuItems!: MenuItem[];
  public logo: string = 'assets/images/logo.jpg';
  public isLoading$!: Observable<boolean>;
  public errorMessage$!: Observable<string>;
  
  constructor(
    private menuService: MenuService,
    private _storeShared: Store<SharedState>,
    private _sharedStoreFacade: SharedStoreFacade,
  ) { }

  public ngOnInit(): void {
    this.getMenuItems();
    this._loadStatus();
  }

  public getMenuItems(): void {
    this.menuItems = this.menuService.menuItems;
  };

  // public prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }

  private _loadStatus(): void {
    this.isLoading$ = this._sharedStoreFacade.getLoadingSpinner$;
    this.errorMessage$ = this._sharedStoreFacade.getErrorMessage$;
    this._storeShared.dispatch(sharedActions.setLoadingSpinner({ status: true }));
  };

  
}
