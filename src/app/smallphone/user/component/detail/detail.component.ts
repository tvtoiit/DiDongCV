import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/services/api.service";
import { Router } from "@angular/router";

interface Product {
    productId: string;
    title: string;
    price: number;
    discount: number;
    priceDiscount: number;
    number: number;
    thumbnail: string;
    numberStars: number;
    imgDesc:[
        {image:string}
    ],
    description: string;
}
interface ProductDetailResponse {
    product: Product;
}
@Component({
    selector: 'detail-component',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})

export class ProductDetailComponent implements OnInit {
    
    showPopup = false;

    openPopup() {
        this.showPopup = true;
    }

    closePopup() {
        this.showPopup = false;
    }

    productId: string = '';
    product: Product[] = [];
    constructor(
        private route: ActivatedRoute,
        private apiService: ApiService,
        private router: Router
    ) {}
    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.productId = params.get('id') || '';
            this.apiService.getData(`product-home/details/${this.productId}`).subscribe(
                (data: any) => { // Giả sử dữ liệu trả về từ API có một mảng sản phẩm
                    this.product = Array.isArray(data) ? data : [data]; // Chắc chắn rằng product là mảng
                }
            );
        });
    }
    addToCart(): void{
        /**
         *  2 viec
         * 1. Lưu vào localStorage : tên, ảnh, giá 2 
         * 2. Chuyển sang trang cart
         * 
         */
        const selectProduct = this.product[0];
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const isCheckExitProduct = cart.find((item:any)=>
            item.idProduct === selectProduct.productId
        );

        if(isCheckExitProduct){
            isCheckExitProduct.quantity += 1;
        }else{
            cart.push({
                idProduct: selectProduct.productId,
                tilte: selectProduct.title,
                price: selectProduct.price,
                discount: selectProduct.discount,
                img: selectProduct.thumbnail,
                quantity: 1
            });
        }
        
        
        localStorage.setItem('cart', JSON.stringify(cart));

        this.router.navigate(['/cart']);
    }
}