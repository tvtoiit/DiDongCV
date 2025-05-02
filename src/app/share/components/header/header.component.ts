import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    constructor(private router: Router) {}

    
    handelClick() {
        this.router.navigate(['/home']);
        
    }
    // navigate to the login page
    openLogin = () => {
        this.router.navigate(['/login']);
    }
    openCart() {
        this.router.navigate(['/cart']);
        
    }
}