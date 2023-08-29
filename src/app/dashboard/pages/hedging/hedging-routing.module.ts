import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HedgingComponent } from './hedging.component';

const routes: Routes = [
  { path: '', component: HedgingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HedgingRoutingModule { }
