import { Component } from '@angular/core';
import { MenuModel } from '../../shared/models';


@Component({
  selector: 'app-side-bar',
  template: `
    <aside>
      <div class="sidenav-header text-center">
        <a class="navbar-brand m-0 d-inline-block" href="" target="_blank">
          <img src="assets/img/logo-main.png" style="transform: scale(2);" class="navbar-brand-img d-block mx-auto" alt="main_logo">
        </a>
      </div>
      <hr class="horizontal mt-0">
      <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
        <ul class="navbar-nav">
          <li class="nav-item" *ngFor="let menu of menus">
            <a class="nav-link" routerLink="{{menu.path}}" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
              <span class="nav-link-text ms-1">{{ menu.label }}</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="sidenav-footer mx-3">
        <div class="btn btn-primary btn-lg mb-0 w-100" type="button">Login</div>
      </div>
    </aside>
  `,
  styles: [
  ]
})
export class SideBarComponent {

  menus: MenuModel[] = [
    // { id: '101', label: 'Dashboard', path: '/dashboard', isActive: false },
    // { id: '102', label: 'Summary & Outstanding', path: '/dashboard/summary', isActive: false },
    // { id: '103', label: 'Match Order', path: '/dashboard/order-match', isActive: false },
    // { id: '104', label: 'Hedging', path: '/dashboard/hedging', isActive: false },
    // { id: '105', label: 'Trading (IM-EX)', path: '/dashboard/trading', isActive: false },
    // { id: '106', label: 'Place Order', path: '/dashboard/place-order', isActive: false },
    // { id: '107', label: 'Place Order Real Time', path: '/dashboard/place-order-rt', isActive: false },
    // { id: '108', label: 'Spacial Price Order', path: '/dashboard/spacial-price-order', isActive: false },
    // { id: '109', label: 'High Low Price', path: '/dashboard/h-l-price', isActive: false },
    // { id: '110', label: 'Profile Detail', path: '/dashboard/profile', isActive: false },
  ];

}
