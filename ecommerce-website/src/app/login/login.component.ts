import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
// import { response } from 'express';


@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [HttpClient],  // Ensure HttpClient and AuthService are provided
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
@Injectable({providedIn : 'root'})
export class LoginComponent {
  loginForm: FormGroup;
  username: string = "";
  password: string = "";
  api = "http://localhost:8080/api/login"
  errorMessage: string ='';

  data = {username : this.username, password : this.password}
  constructor(private router: Router,
    private http:HttpClient ,
    private fb: FormBuilder
    // private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  login() {
    
  console.log(this.loginForm.value)
    this.http.post(this.api, this.loginForm.value, { responseType: 'text' })
    .subscribe(
        response  => {
        
          if (response === 'Login Successful') {
            // Navigate to home page on successful login
            this.router.navigate(['/catalog']);
          } else {
            
            this.errorMessage = 'Invalid username or password';
          }
        },
        error => {
          this.errorMessage = 'An error occurred. Please try again.';
        }
      );
  }
}
