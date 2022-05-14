import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { MenuItem } from '../../../interfaces/menu.interfsce';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderMenuComponent implements OnInit {

  @Input() public menuItems!: MenuItem[];
  @Input() public logo!: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  public trackByFn(index: number): number {
    return index;
  };

}
