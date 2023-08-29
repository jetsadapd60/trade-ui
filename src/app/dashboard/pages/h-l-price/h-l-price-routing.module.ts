import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighLowPriceComponent } from './high-low-price.component';

const routes: Routes = [
  { path: '', component: HighLowPriceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HLPriceRoutingModule { }
