import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = 'aakash';
  password: string = 'aakash';

  constructor(private router: Router) {}

  login() {
    // Implement actual authentication logic here
    if (this.username === 'user' && this.password === 'password') {
      this.router.navigate(['/catalog']);
    } else {
      alert('Invalid credentials');
    }
  }
}
