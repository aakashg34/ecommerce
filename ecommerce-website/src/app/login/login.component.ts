import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';
// import { response } from 'express';



export interface User {
  id: number;
  username: string;
  password : string;
}

export interface LoginResponse {
  message: string;
  userId: number | null;
  address : string;
}

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
  // username: string = "";
  static user = ""
  // password: string = "";
  api = "http://localhost:8080/api/login"
  errorMessage: string | null = null;

  // data = {username : this.username, password : this.password}
  constructor(private router: Router,
    private http:HttpClient ,
    private fb: FormBuilder,
    private authService: AuthService,
    private userService : UserService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  login() {

    this.http.post<LoginResponse>(this.api, this.loginForm.value)
    .subscribe(
        response  => {
       
          if (response.message === 'Login Successful' && response.userId !== null) {
            // LoginComponent.user =
            const username = this.loginForm.value.username

            console.log(response)
            // Navigate to home page on successful login
            this.userService.setUsername(username); 
            this.userService.setAddress(response.address)
            localStorage.setItem('userId', response.userId.toString());
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
  //   console.log(this.loginForm.value)
  //   if (this.loginForm.valid) {
  //   const { username, password } = this.loginForm.value;
  //   // console.log(username,password+"inside this")
  //   this.authService.login(username, password).subscribe(
  //     (response) => {
  //       console.log('Login successful', response);
  //       // Navigate to another page or update UI
  //     },
  //     (error) => {
  //       console.error('Login failed', error);
  //       this.errorMessage = 'Invalid username or password';
  //     }
  //   );
  // }
}


    // this.http.post<User>(this.api, this.loginForm.value)
    // .subscribe(
    //     response  => {
    //       console.log(response)
          // if (response ===  ) {
            // LoginComponent.user = 
            // loggedInUser = res
            // Navigate to home page on successful login
            // this.router.navigate(['/catalog']);
          // } else {
            
            // this.errorMessage = 'Invalid username or password';
          // }
        // },
        // error => {
        //   this.errorMessage = 'An error occurred. Please try again.';
        // }
      // );
        
  // getUserName(){
  //   return this.username;
  // }


