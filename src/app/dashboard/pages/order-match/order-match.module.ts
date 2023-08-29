import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderMatchRoutingModule } from './order-match-routing.module';
import { OrderMatchComponent } from './order-match.component';


@NgModule({
  declarations: [
    OrderMatchComponent
  ],
  imports: [
    CommonModule,
    OrderMatchRoutingModule
  ]
})
export class OrderMatchModule { }
