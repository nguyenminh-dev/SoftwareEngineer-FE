import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import {HomeComponent} from './home/home.component';
import {Layout1Component} from './layout/layout1/layout1.component';
import { AuthGuard } from './auth/auth.guard';
import { MenuComponent } from './menu/menu.component';
import { MenuFormComponent } from './menu/menu-form/menu-form.component';
import { OrderComponent } from './order/order.component';
import { CashierComponent } from './home/cashier/cashier.component';
import { BartenderFormComponent } from './batender/bartender-form/bartender-form.component';
import { BatenderComponent } from './batender/batender.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {
    path: '',
    component: Layout1Component,canActivate:[AuthGuard],
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'waiter', component: OrderComponent},
      {path:'cashier',component: CashierComponent},
      {path:'bartender',component:BatenderComponent},
    ]
}
];

NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export const AppRoutingModule = RouterModule.forRoot(routes);
