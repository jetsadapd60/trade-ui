import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HLPriceRoutingModule } from './h-l-price-routing.module';
import { HighLowPriceComponent } from './high-low-price.component';


@NgModule({
  declarations: [
    HighLowPriceComponent
  ],
  imports: [
    CommonModule,
    HLPriceRoutingModule
  ]
})
export class HLPriceModule { }
