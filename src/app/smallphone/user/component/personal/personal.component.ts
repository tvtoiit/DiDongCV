import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'personal',
    templateUrl: './personal.component.html',
    styleUrls: ['./personal.component.css']
})

export class PersonalComponent{
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