import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule} from 'ngx-toastr';

//import { AppModule as FilterModule } from 'ng-filter';
import { NgPipesModule } from 'ng-pipes';
import {FilterPipe} from './shared/filter.pipe';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderLayout1Component } from './layout/header-layout1/header-layout1.component';
import { HomeComponent } from './home/home.component';
import { Background1Component } from './layout/background1/background1.component';
import { Layout1Component } from './layout/layout1/layout1.component';
import { MenubarComponent } from './layout/menubar/menubar.component';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AuthGuard } from './auth/auth.guard';
import { MenuComponent } from './menu/menu.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { MenuFormComponent } from './menu/menu-form/menu-form.component';
import { OrderComponent } from './order/order.component';
import {MatSelectModule} from '@angular/material/select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CashierComponent } from './home/cashier/cashier.component';
import { MenuCreateComponent } from './menu/menu-create/menu-create.component';
import { OrderFormComponent } from './order/order-form/order-form.component';
import { OrderUpdateComponent } from './order/order-update/order-update.component';
import { BatenderComponent } from './batender/batender.component';
import { BartenderFormComponent } from './batender/bartender-form/bartender-form.component';
import { CashierFormComponent } from './home/cashier/cashier-form/cashier-form.component';
import { CustomerOrderComponent } from './cusomter-order/customer-order/customer-order.component';
import { SearchHeaderComponent } from './cusomter-order/search-header/search-header.component';
import { MenuViewComponent } from './cusomter-order/menu-view/menu-view.component';
import { SidebarCartComponent } from './cusomter-order/sidebar-cart/sidebar-cart.component';
import { FoodDetailModalComponent } from './cusomter-order/food-detail-modal/food-detail-modal.component';
import { MenuItemComponent } from './cusomter-order/menu-item/menu-item.component';
import { CategoryViewComponent } from './cusomter-order/category-view/category-view.component';
import { CartOrderItemViewComponent } from './cusomter-order/cart-order-item-view/cart-order-item-view.component';


@NgModule({
  declarations: [

    AppComponent,
    HeaderLayout1Component,
    HomeComponent,
    Background1Component,
    Layout1Component,
    MenubarComponent,
    LoginComponent,
    MenuComponent,
    MenuFormComponent,
    OrderComponent,
    FilterPipe,
    CashierComponent,
    MenuCreateComponent,
    OrderFormComponent,
    OrderUpdateComponent,
    BatenderComponent,
    BartenderFormComponent,
    CashierFormComponent,
    CustomerOrderComponent,
    SearchHeaderComponent,
    MenuViewComponent,
    SidebarCartComponent,
    FoodDetailModalComponent,
    MenuItemComponent,
    CategoryViewComponent,
    CartOrderItemViewComponent
  ],
  imports: [
    //FilterModule,
    NgPipesModule,
    MatExpansionModule,

    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    NgbModule,
    MatSlideToggleModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [
    MenuFormComponent
],
})
export class AppModule { }
