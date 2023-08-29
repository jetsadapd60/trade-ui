import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryOutstandingRoutingModule } from './summary-outstanding-routing.module';
import { SummaryOutstandingComponent } from './summary-outstanding.component';


@NgModule({
  declarations: [
    SummaryOutstandingComponent
  ],
  imports: [
    CommonModule,
    SummaryOutstandingRoutingModule
  ]
})
export class SummaryOutstandingModule { }
