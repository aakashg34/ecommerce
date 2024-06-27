import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common'; // Import CommonModule
import { HttpClient } from '@angular/common/http';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from  '@angular/material/checkbox';
import { LoginComponent } from '../login/login.component';
import { ProductService, Products } from '../service/product.service';
import { MatSelectModule } from '@angular/material/select';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

// interface Products {
//   name: string;
//   price: string;
//   description: string;
//   category: string;
//   rating: string;
//   imageURL: string;
// }

@Component({
  standalone: true,
  selector: 'app-product-catalog',
  providers: [HttpClient],
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css'],
  imports: [CommonModule,MatIconModule,MatPaginatorModule,LoginComponent,MatCheckboxModule,MatSelectModule,MatButtonModule] // Add CommonModule here
})
export class ProductCatalogComponent implements OnInit {

  products: Products[] = [];  // This will hold the products fetched from the backend
  cartProducts : Products[] = [];
  categories: string[] = [];
  selectedCategories: string[] = [];
  currentPage = 1;
  itemsPerPage = 6;
  username : string = "";
  userId : number = 1;
  api = "http://localhost:8080/api/products"
  companyLogo : string = "src/assets/logo.png"
  constructor(private http : HttpClient,
    private router: Router,
    private login: LoginComponent,
    private productService: ProductService,
    private cartService : CartService) { }

  ngOnInit(): void {
    this.fetchProducts(); 
    // console.log(this.login.getUserName())
    // this.username = this.login.username
    // console.log(this.username+"hihihih") ;// Fetch products when the component initializes
    this.productService.getCategories().subscribe(data => {
      // console.log(data);
      this.categories = data;
    });

    this.cartService.getCartItems(1).subscribe((items) => (this.cartProducts = items));
  }

  filterProducts(): void {
    console.log(this.selectedCategories.length+"lenght of selected categories")
    if (this.selectedCategories.length > 0) {
      this.productService.getProductsByCategories(this.selectedCategories).subscribe(data => {
        this.products = data;
      });
    }else if (this.selectedCategories.length == 0){
      this.fetchProducts();
    }
  }
  onCategoryChange(): void {
    this.filterProducts();
  }
  // onCategoryChange(category: string): void {
  //   const index = this.selectedCategories.indexOf(category);
  //   if (index > -1) {
  //     this.selectedCategories.splice(index, 1);
  //   } else {
  //     this.selectedCategories.push(category);
  //   }
  //   this.filterProducts();
  // }

  fetchProducts(): void {
    

    this.http.get<Products[]>(this.api).subscribe(
      (response : Products[]) => 
        {console.log(response)
        this.products = response
        }
    )

  }

  get paginatedProducts(): Products[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.products.slice(start, end);
  }
  addToCart(product: Products): void {
    this.cartService.addToCart(this.userId, product);
  }

  removeFromCart(product: Products): void {
    this.cartService.removeFromCart(this.userId, product);
  }

  isInCart(product: Products): boolean {
    return this.cartProducts.some((cartProduct) => cartProduct.id === product.id);
  }


  nextPage(): void {
    if (this.currentPage * this.itemsPerPage < this.products.length) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}
