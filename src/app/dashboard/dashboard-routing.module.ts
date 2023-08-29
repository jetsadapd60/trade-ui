import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent,
    children: [
      { path: '', loadChildren:()=>import('./pages/home/home.module').then(m=>m.HomeModule)},
      { path: 'summary', loadChildren:()=>import('./pages/summary-outstanding/summary-outstanding.module').then(m=>m.SummaryOutstandingModule)},
      { path: 'order-match', loadChildren:()=>import('./pages/order-match/order-match.module').then(m=>m.OrderMatchModule) },
      { path: 'hedging', loadChildren:()=>import('./pages/hedging/hedging.module').then(m=>m.HedgingModule) },
      { path: 'trading', loadChildren:()=>import('./pages/trading/trading.module').then(m=>m.TradingModule) },
      { path: 'place-order', loadChildren:()=>import('./pages/place-order/place-order.module').then(m=>m.PlaceOrderModule) },
      { path: 'place-order-rt', loadChildren:()=>import('./pages/place-order-r-t/place-order-r-t.module').then(m=>m.PlaceOrderRTModule) },
      { path: 'spacial-price-order', loadChildren:()=>import('./pages/spacial-price-order/spacial-price-order.module').then(m=>m.SpacialPriceOrderModule) },
      { path: 'h-l-price', loadChildren:()=>import('./pages/h-l-price/h-l-price.module').then(m=>m.HLPriceModule) },
      { path: 'profile', loadChildren:()=>import('./pages/profile/profile.module').then(m=>m.ProfileModule) },
      { path: 'setting', loadChildren:()=>import('./pages/setting/setting.module').then(m=>m.SettingModule) },
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
