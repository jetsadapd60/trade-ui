import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryOutstandingComponent } from './summary-outstanding.component';

const routes: Routes = [
  { path: '', component: SummaryOutstandingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummaryOutstandingRoutingModule { }
