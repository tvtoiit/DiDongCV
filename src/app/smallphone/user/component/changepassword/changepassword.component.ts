import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'changepassword-component',
    templateUrl: './changepassword.component.html',
    styleUrls: ['./changepassword.component.css']
})

export class ChangePasswordComponent{
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