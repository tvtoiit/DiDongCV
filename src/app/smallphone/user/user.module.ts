import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../../share/shared.module';
import { HomeComponent } from './component/home/home.component';
import { SizebarComponent } from './component/home/sizebar/sizebar.component';
import { ContentProductComponent } from './component/home/contentproduct/contentproduct.component';
import { ProductDetailComponent } from './component/detail/detail.component';
import { CartComponent } from './component/cart/cart.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { NotFoundComponent } from './component/notfound/notfound.component';
import { PopupModule } from 'src/app/share/components/popup/popup.module';
import { PersonalComponent } from './component/personal/personal.component';
import { OrderManagementComponent } from './component/ordermanagement/ordermanagement.component';
import { OrderDetailsComponent } from './component/orderdetails/orderdetails.component';
import { ChangePasswordComponent } from './component/changepassword/changepassword.component';
import { AddressComponent } from './component/address/address.component';
import { ChangeAddressComponent } from './component/changeaddress/changeaddress.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    SizebarComponent,
    CartComponent,
    ProductDetailComponent,
    ContentProductComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    PersonalComponent,
    OrderManagementComponent,
    OrderDetailsComponent,
    ChangePasswordComponent,
    AddressComponent,
    ChangeAddressComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    PopupModule,
    FormsModule
  ]
})
export class UserModule { }
