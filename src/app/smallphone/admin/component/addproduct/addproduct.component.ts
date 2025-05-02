import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
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
