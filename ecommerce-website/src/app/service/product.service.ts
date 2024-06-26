import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Products {
  id: number;
  name: string;
  rating: number;
  category: string;
  description: string;
  price: number;
  imageURL: string;
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
    return this.http.get<Products[]>(`${this.baseUrl}/categories`, { params });
  }

  getCategories(): Observable<string[]> {
    console.log("in here");
    return this.http.get<string[]>(`${this.baseUrl}/categories-list`);
  }
}
