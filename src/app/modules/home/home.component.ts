import { Component, OnInit } from '@angular/core';

import { MenuItem } from '../../interfaces/menu.interfsce';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  public menuItems!: MenuItem[];
  public logo: string = 'assets/images/logo.jpg';
  
  constructor(
    private menuService: MenuService,
  ) { }

  public ngOnInit(): void {
    this.getMenuItems();
  }

  public getMenuItems(): void {
    this.menuItems = this.menuService.menuItems;
  };
}
