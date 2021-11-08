import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentFormComponent } from './department/department-form/department-form.component';
import { LoginComponent } from './login/login.component';

import {DepartmentComponent} from './department/department.component';
import {HomeComponent} from './home/home.component';
import {Layout1Component} from './layout/layout1/layout1.component';
import { AuthGuard } from './auth/auth.guard';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { MenuComponent } from './menu/menu.component';
import { MenuFormComponent } from './menu/menu-form/menu-form.component';
import { OrderComponent } from './order/order.component';
import { CategoryComponent } from './category/category.component';
import { CategoryFormComponent } from './category/category-form/category-form.component';
import { TableComponent } from './table/table.component';
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
      { path: 'department', component: DepartmentComponent,
        // children:
        // [
        //   {path: 'update', component: DepartmentFormComponent}
        // ]
      },
      { path: 'user', component: UserComponent,
        // children:
        // [
        //   {path: 'create', component: UserFormComponent}
        // ]
      },
      {
        path: 'menu', component: MenuComponent,
        // children:
        // [
        //   {path: 'add', component: MenuFormComponent}
        // ]
      },
      { path: 'category', component: CategoryComponent,
      // children:
      // [
      //   {path: 'add', component: CategoryFormComponent}
      // ]
    },
      { path: 'waiter', component: OrderComponent},
      {path:'cashier',component: CashierComponent},
      {path:'bartender',component:BatenderComponent},
      {path: 'table', component: TableComponent}
    ]
}
];

NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export const AppRoutingModule = RouterModule.forRoot(routes);
