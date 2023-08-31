import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { SideBarComponent } from './feature/side-bar.component';
import { GoldPriceCardComponent } from './feature/gold-price-card.component';
import { NavBarComponent } from './feature/nav-bar.component';
import { ProfileService } from '../services/profile.service';
import { SocketIoService } from '../services/socket-io.service';
import { TraderPriceService } from '../services/trader-price.service';
import { HightLowPriceService } from '../services/hight-low-price.service';
import { PlaceOrderRealTimeService } from '../services/place-order-r-t.service';
import { MarketingTeamService } from '../services/marketing-team.service';

@NgModule({
  declarations: [
    DashboardComponent,
    SideBarComponent,
    GoldPriceCardComponent,
    NavBarComponent,
  ],
  imports: [SharedModule, DashboardRoutingModule],
  providers: [
    ProfileService,
    SocketIoService,
    TraderPriceService,
    MarketingTeamService,
    HightLowPriceService,
    PlaceOrderRealTimeService
  ],
})
export class DashboardModule {}
