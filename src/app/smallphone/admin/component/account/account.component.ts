import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'account-Customer',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})

export class AccountComponent{
    constructor(
        private router:Router
    ){}

    backHome(){
        this.router.navigate(['/admin/admin']);
    }
    addproduct(){
        this.router.navigate(['/admin/add-product']);
    }
    accountCustomer(){
        this.router.navigate(['/admin/account-Custommer']);
    }
    order(){
        this.router.navigate(['/admin/order-component']);
    }
    complain(){
        this.router.navigate(['./admin/complain-component']);
    }
}