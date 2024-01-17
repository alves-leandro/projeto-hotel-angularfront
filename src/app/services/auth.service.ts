import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService) {}

  login(email: string, password: string): Observable<any> {
    const endpoint = 'login';

    const requestBody = {
      email: email,
      password: password,
    };

    return this.apiService.post(endpoint, requestBody).pipe(
      tap((response) => {
        console.log('Response from login:', response);
        const token = response.token;
        const user = response.user || {};
        console.log('User details:', user);
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        return true;
      }),
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getAuthotizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  getUserDetails() {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : {};
  }
}
