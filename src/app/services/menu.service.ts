import { Injectable } from '@angular/core';

import { MenuItem } from '../interfaces/menu.interfsce';

@Injectable()
export class MenuService {

  constructor() { }

  public menuItems: MenuItem[] = [
    {
      name: 'Dogs',
      path: '/dogs',
    },
    {
      name: 'Create',
      path: '/create-dog',
    },
    // {
    //   name: 'Competitions',
    //   path: '/competitions',
    // },
    // {
    //   name: 'Group MKF',
    //   path: '/breed-group',
    // },
    // {
    //   name: 'Game',
    //   path: '/game'
    // },
    {
      name: 'SingUp',
      path: '/auth/signup',
    },
    {
      name: 'LogIn',
      path: '/auth/login',
    },
    {
      name: 'LogOut',
      path: '/auth/login',
    }
  ]
}
