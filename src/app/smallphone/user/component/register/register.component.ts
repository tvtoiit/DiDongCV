import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'register-component',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    title: string = 'Đây là trang register';

    constructor(
        private router: Router
    ){}

    DangNhap(){
        this.router.navigate(['/login']);
    }

}