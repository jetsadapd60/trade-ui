import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceOrderRTRoutingModule } from './place-order-r-t-routing.module';
import { PlaceOrderRTComponent } from './place-order-r-t.component';
import { NotFoundDataComponent } from '../../not-found-data.component';


@NgModule({
  declarations: [
    PlaceOrderRTComponent,
    NotFoundDataComponent
  ],
  imports: [
    CommonModule,
    PlaceOrderRTRoutingModule
  ]
})
export class PlaceOrderRTModule { }
