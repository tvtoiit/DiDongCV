import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component ({
    selector: 'address-component',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.css']
})

export class AddressComponent{
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
        ChangeAddress() {
            this.router.navigate(['/CapNhatDiaChi']);
        }
}