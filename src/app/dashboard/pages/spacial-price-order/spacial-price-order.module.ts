import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpacialPriceOrderRoutingModule } from './spacial-price-order-routing.module';
import { SpacialPriceOrderComponent } from './spacial-price-order.component';


@NgModule({
  declarations: [
    SpacialPriceOrderComponent
  ],
  imports: [
    CommonModule,
    SpacialPriceOrderRoutingModule
  ]
})
export class SpacialPriceOrderModule { }
