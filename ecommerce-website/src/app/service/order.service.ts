import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'http://localhost:8080/api/orders'; // Adjust your API URL

  constructor(private http: HttpClient) { }

  placeOrder(orderRequest: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/placeOrder`, orderRequest);
  }
}
