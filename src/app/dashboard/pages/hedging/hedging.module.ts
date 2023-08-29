import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HedgingRoutingModule } from './hedging-routing.module';
import { HedgingComponent } from './hedging.component';


@NgModule({
  declarations: [
    HedgingComponent
  ],
  imports: [
    CommonModule,
    HedgingRoutingModule,
  ],
  exports: [HedgingComponent]
})
export class HedgingModule { }
