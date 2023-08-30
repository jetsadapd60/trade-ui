import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceOrderRTRoutingModule } from './place-order-r-t-routing.module';
import { PlaceOrderRTComponent } from './place-order-r-t.component';
import { NotFoundDataComponent } from '../../not-found-data.component';
import { PlaceOrderRealTimeService } from 'src/app/services/place-order-r-t.service';
import { StatusColumnBgStyleDirective } from 'src/app/shared/directives/status-column-Bg-gStyle.directive';
import { MarketingTeamService } from 'src/app/services/marketing-team.service';


@NgModule({
  declarations: [
    PlaceOrderRTComponent,
    NotFoundDataComponent,
    StatusColumnBgStyleDirective
  ],
  imports: [
    CommonModule,
    PlaceOrderRTRoutingModule
  ],
  providers: [PlaceOrderRealTimeService, MarketingTeamService],
})
export class PlaceOrderRTModule {}
