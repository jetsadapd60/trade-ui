import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginGuard } from './shared/guards/login.guard';
import { PageNotFoundComponent } from './core/page-not-found.component';

const routes: Routes = [
  { path: 'dashboard', loadChildren: ()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule), canActivate: [AuthGuard] },
  { path: 'login', loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule), canActivate: [LoginGuard]},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
