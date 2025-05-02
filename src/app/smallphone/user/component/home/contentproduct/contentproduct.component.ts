import { Component } from "@angular/core";
import { error } from "console";
import { ApiService } from "src/app/services/api.service";
import { Router } from "@angular/router";



interface ProductCategory {
    productTypeId: string;
    name: string;
    products: Product[];
}

interface Product {
    productId: string;
    title: string;
    price: number;
    discount: number;
    priceDiscount: number;
    number: number;
    thumbnail: string;
    numberStars: number;
    description: string;
}

@Component({
    selector: 'contentproduct',
    templateUrl: './contentproduct.component.html',
    styleUrls: ['./contentproduct.component.css']
})


export class ContentProductComponent {
    
    categories: ProductCategory[] = []; 
    errorMessage: string = '';
    
    constructor(
        private apiService: ApiService,
        private router: Router
    ) {}
    
    ngOnInit(): void {
    this.apiService.getData('product-home').subscribe(
        (data) => {
            this.categories = data;
        }
        );
    }

    onProductClick(productId: string) {
        this.router.navigate(['/product-detail', productId]);
    }

}