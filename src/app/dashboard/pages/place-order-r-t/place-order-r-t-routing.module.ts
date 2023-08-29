import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceOrderRTComponent } from './place-order-r-t.component';

const routes: Routes = [
  { path: '', component: PlaceOrderRTComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceOrderRTRoutingModule { }
