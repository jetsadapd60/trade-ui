import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryOutstandingRoutingModule } from './summary-outstanding-routing.module';
import { SummaryOutstandingComponent } from './summary-outstanding.component';
import { SummaryOutsService } from 'src/app/services/summary-outs.service';


@NgModule({
  declarations: [
    SummaryOutstandingComponent
  ],
  imports: [
    CommonModule,
    SummaryOutstandingRoutingModule
  ],
  providers: [SummaryOutsService]
})
export class SummaryOutstandingModule { }
