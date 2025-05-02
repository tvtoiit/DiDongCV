import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductDetailComponent } from './component/detail/detail.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { NotFoundComponent } from './component/notfound/notfound.component';
import { PersonalComponent } from './component/personal/personal.component';
import { OrderManagementComponent } from './component/ordermanagement/ordermanagement.component';
import { OrderDetailsComponent } from './component/orderdetails/orderdetails.component';
import { ChangePasswordComponent } from './component/changepassword/changepassword.component';
import { AddressComponent } from './component/address/address.component';
import { ChangeAddressComponent } from './component/changeaddress/changeaddress.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent }, 
  { path: 'cart', component: CartComponent },
  { path: 'login', component:  LoginComponent},
  { path: 'register', component:  RegisterComponent},
  { path: 'notfound', component:  NotFoundComponent},
  { path: 'personal', component: PersonalComponent},
  { path: 'QuanlyDonHang', component:OrderManagementComponent},
  { path: 'Order', component: OrderDetailsComponent},
  { path: 'DoiMatKhau', component: ChangePasswordComponent},
  { path: 'DiaChi', component: AddressComponent},
  { path: 'CapNhatDiaChi', component:ChangeAddressComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
