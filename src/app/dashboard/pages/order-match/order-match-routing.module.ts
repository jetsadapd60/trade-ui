import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderMatchComponent } from './order-match.component';

const routes: Routes = [
  { path: '', component: OrderMatchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderMatchRoutingModule { }
