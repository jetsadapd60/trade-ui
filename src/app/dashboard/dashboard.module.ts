import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { SideBarComponent } from './feature/side-bar.component';
import { GoldPriceCardComponent } from './feature/gold-price-card.component';
import { NavBarComponent } from './feature/nav-bar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SideBarComponent,
    GoldPriceCardComponent,
    NavBarComponent,
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
