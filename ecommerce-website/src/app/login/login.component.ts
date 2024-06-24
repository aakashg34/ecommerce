import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // providers: [AuthService],  // Ensure HttpClient and AuthService are provided
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, 
    // private authService: AuthService
  ) {}

  login() {
    
    // this.authService.login(this.username, this.password).subscribe(
    //   response => {
    //     if (response) {
    //       this.router.navigate(['/catalog']);
    //     } else {
    //       alert('Invalid credentials');
    //     }
    //   },
    //   error => {
    //     alert('Login failed');
    //   }
    // );
  }
}
