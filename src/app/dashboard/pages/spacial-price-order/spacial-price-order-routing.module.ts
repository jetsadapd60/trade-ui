import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpacialPriceOrderComponent } from './spacial-price-order.component';

const routes: Routes = [
  { path: '', component: SpacialPriceOrderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpacialPriceOrderRoutingModule { }
