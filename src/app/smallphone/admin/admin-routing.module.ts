import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import các component trong phần Admin
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { AccountComponent } from './component/account/account.component';
import { OrderComponent } from './component/order/oder.component';
import { ComplainComponent } from './component/complain/complain.component';


const routes: Routes = [
  { path: 'admin', component: DashboardComponent }, // Mặc định điều hướng đến Dashboard khi vào /admin
  { path: 'add-product', component: AddproductComponent },
  { path: 'account-Custommer', component: AccountComponent},
  { path: 'order-component', component: OrderComponent},
  { path: 'complain-component', component: ComplainComponent}
//   { path: 'add-supplier', component: AddSupplierComponent },
//   { path: 'search-product', component: SearchProductComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
