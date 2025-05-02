import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'oder-component',
    templateUrl: './oder.component.html',
    styleUrls: ['./oder.component.css']
})

export class OrderComponent{
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