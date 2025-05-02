import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component ({
    selector: 'orderdetails-component',
    templateUrl: './orderdetails.component.html',
    styleUrls: ['./orderdetails.component.css']
})

export class OrderDetailsComponent{
    constructor(
            private router: Router
        ){}
    
        ThongTinTaiKhoan() {
            this.router.navigate(['/personal']);
        }
        QuanLyDonHang() {
            this.router.navigate(['/QuanlyDonHang']);
        }
        DoiMatKhau() {
            this.router.navigate(['/DoiMatKhau']);
        }
        SoDiaChi() {
            this.router.navigate(['/DiaChi']);
        }
        backToManeger(){
            this.router.navigate(['/QuanLyDonHang']);
        }
}