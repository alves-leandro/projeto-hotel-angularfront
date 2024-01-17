import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Models } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apiService: ApiService) {}

  getAllUsers(): Observable<Models['User'][]> {
    return this.apiService.get<Models['User'][]>('users');
  }

  getAllEmployees(): Observable<Models['User'][]> {
    return this.apiService.get<Models['User'][]>('users');
  }

  getUserById(userId: string): Observable<Models['User']> {
    return this.apiService.get<Models['User']>(`users/${userId}`);
  }

  createUser(userData: Models['User']): Observable<Models['User']> {
    return this.apiService.post<Models['User']>('users', userData);
  }

  updateUser(
    userId: string,
    userData: Models['User'],
  ): Observable<Models['User']> {
    return this.apiService.patch<Models['User']>(`users/${userId}`, userData);
  }

  deleteUser(userId: string): Observable<Models['User']> {
    return this.apiService.delete<Models['User']>(`users/${userId}`);
  }
}
