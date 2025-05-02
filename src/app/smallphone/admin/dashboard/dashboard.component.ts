import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'dashboard-component',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
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
    oder(){
        this.router.navigate(['/admin/oder-component']);
    }
    complain(){
        this.router.navigate(['./admin/complain-component']);
    }
}