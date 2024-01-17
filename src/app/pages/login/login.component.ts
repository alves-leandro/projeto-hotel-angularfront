import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onSubmit(): void {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Response from login:', response);
        const token = response.token;
        const user = response.user || {};
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Error during login:', error);
      },
    );
  }
}
