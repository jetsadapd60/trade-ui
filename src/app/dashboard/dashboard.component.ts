import { Component } from '@angular/core';
import { MenuModel } from '../shared/models';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="min-height-300 bg-primary position-absolute w-100"></div>

    <!-- Side Bar -->
    <!-- <app-side-bar class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main"></app-side-bar> -->
    <aside class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
      <div class="sidenav-header position-relative">
        <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
        <a class="navbar-brand m-0" routerLink="/dashboard">
          <img src="assets/img/logo-main.png" style="transform: scale(2);" class="navbar-brand-img d-block mx-auto" alt="main_logo">
        </a>
      </div>
      <hr class="horizontal dark mt-0">
      <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
        <ul class="navbar-nav">
          <li class="nav-item" *ngFor="let m of menus" (click)="toggleSideBar()">
            <a class="nav-link" [routerLink]="m.path" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
              <!-- <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <i class="ni ni-scissors text-primary text-sm opacity-10"></i>
              </div> -->
              <span class="nav-link-text ms-1">{{m.label}}</span>
            </a>
          </li>
          <!-- <li class="nav-item" *ngFor="let menu of menus">
              <a class="nav-link" routerLink="{{menu.path}}" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
                <span class="nav-link-text ms-1">{{ menu.label }}</span>
              </a>
            </li> -->
        </ul>
      </div>
      
      <div class="sidenav-footer mx-3 ">
        <div class="btn btn-primary btn-lg mb-0 w-100" (click)="signout()" type="button">Login</div>
      </div>
    </aside>

    <main class="main-content position-relative border-radius-lg ">
      <!-- Nav Bar -->
      <app-nav-bar></app-nav-bar>
      
      <div class="container-fluid py-4">
        <!-- Head -->
        <app-gold-price-card></app-gold-price-card>
        <!-- End Gold Price Card --> 

        <!-- Content -->
        <router-outlet></router-outlet>
      </div>
    </main>
  `,
  styles: [
    `
      .navbar-vertical.navbar-expand-xs .navbar-collapse {
          display: block;
          overflow: auto;
          height: calc(100vh - 185px);
      }
    `
  ]
})
export class DashboardComponent {

  menus: MenuModel[] = [
    { id: '101', icon: 'fa-solid fa-gauge', label: 'Dashboard', path: '/dashboard', isActive: false },
    { id: '102', icon: '', label: 'Summary & Outstanding', path: '/dashboard/summary', isActive: false },
    { id: '103', icon: '', label: 'Match Order', path: '/dashboard/order-match', isActive: false },
    { id: '104', icon: '', label: 'Hedging', path: '/dashboard/hedging', isActive: false },
    { id: '105', icon: '', label: 'Trading (IM-EX)', path: '/dashboard/trading', isActive: false },
    { id: '106', icon: '', label: 'Place Order', path: '/dashboard/place-order', isActive: false },
    { id: '107', icon: '', label: 'Place Order Real Time', path: '/dashboard/place-order-rt', isActive: false },
    { id: '108', icon: '', label: 'Spacial Price Order', path: '/dashboard/spacial-price-order', isActive: false },
    { id: '109', icon: '', label: 'High Low Price', path: '/dashboard/h-l-price', isActive: false },
    { id: '110', icon: '', label: 'Profile Detail', path: '/dashboard/profile', isActive: false },
    { id: '111', icon: '', label: 'Setting', path: '/dashboard/setting', isActive: false },
  ];

  constructor(private authService: AuthService) {}


  toggleSideBar() {
    // Toggle Sidenav
    // const iconNavbarSidenav = document.getElementById('iconNavbarSidenav');
    // const iconSidenav = document.getElementById('iconSidenav');
    // const sidenav = document.getElementById('sidenav-main');
    // let body = document.querySelector('body');
    // const line = document.getElementsByClassName('sidenav-toggler-line')[0];
    // let className = 'g-sidenav-pinned';


    // if (body && body.classList.contains(className)) {
    //   body.classList.remove(className);
    //   line.classList.remove('sidenav-toggler-line');
    //   setTimeout(function() {
    //     sidenav?.classList.remove('bg-white');
    //   }, 100);
    //   sidenav?.classList.remove('bg-transparent');
    //   const html = document.querySelector('html')
    // } else {
    //   body?.classList.add(className);
    //   line.classList.add('sidenav-toggler-line');
    //   sidenav?.classList.add('bg-white');
    //   sidenav?.classList.remove('bg-transparent');
    //   iconSidenav?.classList.remove('d-none');
    // }
  }


  signout() {
    this.authService.signOut();
  }

}
