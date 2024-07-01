import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, catchError, of, map } from 'rxjs';
import { ProductService, Products } from './product.service';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  rating: number;
  imageURL: string;
  formattedPrice?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];
  private cartTotal: number = 0;
  private cartItemsSubject = new BehaviorSubject<Product[]>(this.cartItems);
  private cartTotalSubject = new BehaviorSubject<number>(this.cartTotal);
  private apiUrl = 'http://localhost:8080/api/cart'

  constructor(private http: HttpClient,
    private productService :ProductService
  ) {}

  getCartItems(userId :number): Observable<Product[]> {
    let params = new HttpParams();
    params.append('userId',userId)
    return this.http.get<Product[]>(`${this.apiUrl}/${userId}`).pipe(
      map((products: Products[]) =>
        products.map((product: Products) => {
          product.price = Math.round(product.price*83); // Ensure price is rounded to 0 decimal places
          product.formattedPrice = this.productService.formatPriceINR(product.price); // Add a new property for formatted price
          return product;
        })
      )
    );
  }

  getCartTotal(): Observable<number> {
    return this.cartTotalSubject.asObservable();
  }

  // addToCart(userId: number, product: Product): Observable<void> {
  //   return this.http.post<void>(`${this.apiUrl}/${userId}/add/${product.id}`, {});
  // }

  addToCartProd(userId: number, product: Product): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${userId}/add/${product.id}`, {});
  }
  
  // removeFromCart(userId: number, product: Product): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${userId}/remove/${product.id}`);
  // }

  addToCart(userId: number, product: Product): void {
    this.http.post<Product[]>(`${this.apiUrl}/${userId}/add/${product.id}`, {}).subscribe((cartItems) => {
      this.cartItems = cartItems;
      this.cartTotal = this.cartItems.reduce((total, item) => total + item.price, 0);
      this.cartItemsSubject.next(this.cartItems);
      this.cartTotalSubject.next(this.cartTotal);
      this.updateCartTotal();
    });
  }

  removeFromCart(userId: number, product: Product): void {
    this.http.delete<Product[]>(`${this.apiUrl}/${userId}/remove/${product.id}`).subscribe((cartItems) => {
      this.cartItems = cartItems;
      this.cartTotal = this.cartItems.reduce((total, item) => total + item.price, 0);
      this.cartItemsSubject.next(this.cartItems);
      this.cartTotalSubject.next(this.cartTotal);
    });
  }

  private updateCartTotal():void {
    const total = this.cartItems.reduce((sum, item) => sum + item.price, 0);
    const formattedTotal = this.formatPriceINR(total);
    this.cartTotalSubject.next(total);
  }

  clearCart(userId: number)  {
    const url = `http://localhost:8080/api/${userId}/clear-cart`; // Adjust URL as per your backend API
     return this.http.delete(url).pipe(
      catchError((error) => {
        console.error('Error clearing cart:', error);
        return of(null); // Handling error gracefully
      })
    );
  }
  formatPriceINR(price: number): string {
    return price.toLocaleString('en-IN', {
      maximumFractionDigits: 0, // Adjust as needed, 0 for no decimal places
    });
  }
}
