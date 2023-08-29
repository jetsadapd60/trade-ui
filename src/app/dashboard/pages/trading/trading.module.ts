import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TradingRoutingModule } from './trading-routing.module';
import { TradingComponent } from './trading.component';
import { FilterFormComponent } from './filter-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TradingComponent,
    FilterFormComponent
  ],
  imports: [
    CommonModule,
    TradingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class TradingModule { }
