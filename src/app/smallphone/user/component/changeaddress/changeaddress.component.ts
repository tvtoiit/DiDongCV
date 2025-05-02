import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component ({
    selector: 'changeaddress-component',
    templateUrl: './changeaddress.component.html',
    styleUrls: ['./changeaddress.component.css']
})

export class ChangeAddressComponent {
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
}