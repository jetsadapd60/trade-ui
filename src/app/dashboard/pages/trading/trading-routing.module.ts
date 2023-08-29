import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TradingComponent } from './trading.component';
import { FilterFormComponent } from './filter-form.component';

const routes: Routes = [
  { path: '', component: TradingComponent,
children:[
  {path:'', loadChildren:()=>import('../hedging/hedging.module').then(m=>m.HedgingModule)},
  {path:'filter', component: FilterFormComponent}
] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradingRoutingModule { }
