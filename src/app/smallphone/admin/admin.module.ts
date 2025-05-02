import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../../share/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { AccountComponent } from './component/account/account.component';
import { OrderComponent } from './component/order/oder.component';
import { ComplainComponent } from './component/complain/complain.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AddproductComponent,
    AccountComponent,
    OrderComponent,
    ComplainComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
