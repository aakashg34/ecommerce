import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  rating: number;
  imageURL: string;
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

  constructor(private http: HttpClient) {}

  getCartItems(userId :number): Observable<Product[]> {
    let params = new HttpParams();
    params.append('userId',userId)
    return this.http.get<Product[]>(`${this.apiUrl}/${userId}`);
  }

  getCartTotal(): Observable<number> {
    return this.cartTotalSubject.asObservable();
  }

  addToCart(userId: number, product: Product): void {
    this.http.post<Product[]>(`${this.apiUrl}/${userId}/add/${product.id}`, {}).subscribe((cartItems) => {
      this.cartItems = cartItems;
      this.cartTotal = this.cartItems.reduce((total, item) => total + item.price, 0);
      this.cartItemsSubject.next(this.cartItems);
      this.cartTotalSubject.next(this.cartTotal);
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
}
