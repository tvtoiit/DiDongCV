import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { NgModel } from "@angular/forms";
import { ApiService } from "src/app/services/api.service";

interface Provinces{
    name: string,
    code: number,
    division_type: string,
    codename: string,
    phone_code: number,
    districts: []
}

interface Districts{
    name: string,
    code: number,
    division_type: string,
    codename: string,
    province_code: string;
    wards:[]
}

interface Wards{
    name: string,
    code: number,
    division_type: string,
    codename: string,
    district_code: number
}

@Component({
    selector: 'cart-component',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})

export class CartComponent {
    
    @ViewChild('userInputRef') inputElement!: ElementRef;
    selectedXaCode: string | null = null;
    checkOrderProduct:boolean = false;

    gender: string = '1';

    title: string = 'Giỏ hàng';
    //1. Khai báo mảng chứa các sản phẩm
    cartArr: any[] = [];
    
    //2. Khai báo biến tổng tiền
    total: number = 0;
    
    // số lượng sản phẩm
    quantity: number = 0;

    // array provinces
    provincesArr: Provinces[] = [];

    // array Districts
    districts: Districts[] = [];
    selectedProvinceCode: number | null = null;

    //Check order 
    isAllChecked: boolean = false;

    // array wards
    ward: Wards[] = [];
    selectedWardsCode: number | null = null;
    constructor(
        private apiService: ApiService

    ) {}
    

    ngOnInit(): void {
        const storedCart = localStorage.getItem('cart');
        if(storedCart){
            this.cartArr = JSON.parse(storedCart);
            this.total = this.cartArr.reduce((sum, item) => {
                this.quantity += item.quantity;
                return sum + item.price * item.quantity;
            }, 0);
        }

        // get API provinces
        this.apiService.dataPublic(`p`).subscribe(
            (data: any) =>{
                this.provincesArr = data;
            }
        )
    }

    // bắt sự kiện đã chọn tỉnh
    onProvinceChange(provinceCode : number){
        this.apiService.dataPublic(`p/${this.selectedProvinceCode}?depth=2`).subscribe(
            (data: any) => {
                this.districts = data.districts;
            }
        )
    }
    onWardsChange(wardCode : number){
        this.apiService.dataPublic(`d/${this.selectedWardsCode}?depth=2`).subscribe(
            (data : any) => {
                this.ward = data.wards;
            }
        )
        
    }
    //3. Hàm thêm sản phẩm vào giỏ hàng
    addToCart = (product: any) => {
        //Kiểm tra sản phẩm đã tồn tại trong giỏ hàng chưa
        let index = this.cartArr.findIndex(item => item.id == product.id);
        if (index == -1) {
            //Nếu chưa tồn tại thì thêm sản phẩm vào giỏ hàng
            this.cartArr.push(product);
        } else {
            //Nếu đã tồn tại thì cập nhật số lượng sản phẩm
            this.cartArr[index].quantity += product.quantity;
        }
        //Tính tổng tiền
        this.total = this.cartArr.reduce((sum, item) => {
            return sum + item.price * item.quantity;
        }, 0);
    }

    //4. Hàm xóa sản phẩm khỏi giỏ hàng
    deleteToCart = (productId: number) => {
        //Tìm vị trí của sản phẩm cần xóa
        let index = this.cartArr.findIndex(item => item.id == productId);
        //Xóa sản phẩm khỏi giỏ hàng
        this.cartArr.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(this.cartArr));
        //Tính tổng tiền
        this.total = this.cartArr.reduce((sum, item) => {
            this.quantity -= item.quantity
            return sum + item.price * item.quantity;
        }, 0);
        this.quantity = this.cartArr.reduce((sum, item) =>{ 
            return sum + item.quantity;
        }, 0);
    }

    //5. Hàm cập nhật số lượng sản phẩm trong giỏ hàng
    updateToCart = () => {
        localStorage.setItem('cart', JSON.stringify(this.cartArr));
        //Tìm vị trí của sản phẩm cần cập nhật
        // let index = this.cartArr.findIndex(item => item.id == product.id);
        //Cập nhật số lượng sản phẩm
        // this.cartArr[index].quantity = product.quantity;
        //Tính tổng tiền
        this.total = this.cartArr.reduce((sum, item) => {
            // this.quantity += item.quantity;
            return sum + item.price * item.quantity;
        }, 0);
    }

    down = (index:number)=>{
        if(this.cartArr[index].quantity > 1){
            this.cartArr[index].quantity -= 1;
            this.quantity -= 1;
            this.updateToCart();
        }
    }
    plus = (index:number)=>{
        if(this.cartArr[index].quantity >= 1){
            this.cartArr[index].quantity += 1;
            this.quantity += 1;
            this.updateToCart();
        }
    }



    isVisible = false;  // Bắt đầu là ẩn phần tử

    toggleVisibility() {
        // this.isVisible = !this.isVisible;
        // console.log(this.isVisible);
        console.log('123');
        this.isVisible=true;
    }

    // dat hang
    userInput: string = '';
    phone:string='';
    onHandleOrder() {

        const selectedItems = this.getSelectedProducts();

        if (selectedItems.length === 0) {
            alert("Chưa chọn sản phẩm  nào!");
            return;
        }


        const requestOrder = {
            phoneNumber: this.phone,
            address: "",
            provinceId: this.selectedProvinceCode,
            gender: +this.gender, 
            product: selectedItems.map(item => ({
              productId: item.id,
              number: item.quantity
            }))
          };
        console.log(requestOrder);
        

        this.apiService.postData('order-user/create', requestOrder).subscribe({
            next: (response) => {
              console.log('Đặt hàng thành công:', response);
              alert('Đặt hàng thành công!');
            },
            error: (error) => {
              console.error('Đặt hàng thất bại:', error);
              alert('Đặt hàng thất bại. Vui lòng thử lại!');
            }
          });

        
    }

    /**
     * Khi người dùng click vào 1 sản phẩm
     */
    onItemCheckedChange() {
        this.isAllChecked = this.cartArr.every(item => item.checked);
    }

    /**
     * Function get data product check
     * @returns checked
     */
    getSelectedProducts() {
        const selected = this.cartArr.filter(item => item.checked);
        //console.log('Sản phẩm được chọn:', selected);
        return selected;
      }
}