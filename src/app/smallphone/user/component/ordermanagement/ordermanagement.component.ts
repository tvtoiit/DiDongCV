import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/services/api.service";
import { Router } from "@angular/router";

@Component({
    selector: 'order-component',
    templateUrl: './ordermanagement.component.html',
    styleUrls: ['./ordermanagement.component.css']
})

export class OrderManagementComponent{
    constructor(
            private route: ActivatedRoute,
            private apiService: ApiService,
            private router: Router
        ) {}
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
        handelClick() {
        this.router.navigate(['/Order']);
        }
    }