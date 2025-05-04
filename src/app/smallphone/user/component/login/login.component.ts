import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/services/api.service";


@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    title: string = 'Đây là trang login';
    username: string = '';
    logPassword: string = '';

    constructor(
        private router : Router,
        private apiService: ApiService
    ){}

    Click_dangky(){
        this.router.navigate(['./register']);
    }

    /**
     * Submit the login form
     * @param event The submit event
     */
    onSubmit(): void {
        const requestLogin = {
            username: this.username,
            password: this.logPassword
        }

        this.apiService.postData('auth/signin', requestLogin).subscribe({
            next: (response) => {
                // Chuyển đến trang chủ
                this.router.navigate(['./home']);
                // Sau khi nhận response từ BE
                localStorage.setItem('accessToken', response.accessToken);
            },
            error: (error) => {
              console.error('Đăng nhập thất bại:', error);
            }
          });

        
    }


}