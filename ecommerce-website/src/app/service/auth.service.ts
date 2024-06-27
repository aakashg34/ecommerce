import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router'

export interface User {
  id: number;
  username: string;
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient,
              private router : Router) {}

  login(username: string, password: string) {
    // const headers = new HttpHeaders({ 'Content-Type': 'text' });
    const body = JSON.stringify({ username, password });
    console.log(body)

    return this.http.post(this.api, body).pipe(
      tap((response) => {
        // Optionally store user details or token in local storage
        localStorage.setItem('currentUser', JSON.stringify(response));
      })
    );
  }

  logout(): void {
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    this.router.navigate(['/']);
  }
}
