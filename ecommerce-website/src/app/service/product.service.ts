import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Products {
  id: number;
  name: string;
  rating: number;
  category: string;
  description: string;
  price: number;
  imageURL: string;
  formattedPrice?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getProductsByCategories(categories: string[]): Observable<Products[]> {
    let params = new HttpParams();
    categories.forEach(category => {
      params = params.append('categories', category);
    });
    return this.http.get<Products[]>(`${this.baseUrl}/categories`, { params }).pipe(
      map((products: any[]) => products.map(product => ({
        ...product,
        price: Math.round(product.price*83) // Round price to two decimal places
      })))
    );;
  }

  getCategories(): Observable<string[]> {
    console.log("in here");
    return this.http.get<string[]>(`${this.baseUrl}/categories-list`);
  }

  // getProducts(): Observable<Products[]> {
  //   return this.http.get<Products[]>(`${this.baseUrl}/products`).pipe(
  //     map((products: any[]) => products.map(product => ({
  //       ...product,
  //       price: Math.round(product.price*83),
  //       // formattedPrice : Math.round(this.formatPriceINR(product.price)*83) // Round price to two decimal places
  //     })))
  //   );
  // }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.baseUrl}/products`).pipe(
      map((products: Products[]) =>
        products.map((product: Products) => {
          product.price = Math.round(product.price*83); // Ensure price is rounded to 0 decimal places
          product.formattedPrice = this.formatPriceINR(product.price); // Add a new property for formatted price
          return product;
        })
      )
    );
  }


   formatPriceINR(price: number): string {
    return price.toLocaleString('en-IN', {
      maximumFractionDigits: 0, // Adjust as needed, 0 for no decimal places
    });
  }
}
