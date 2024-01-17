import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Models } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  constructor(private apiService: ApiService) {}

  getAllCheckouts(): Observable<Models['Checkout'][]> {
    return this.apiService.get('checkouts');
  }

  getCheckoutById(checkoutId: string): Observable<Models['Checkout']> {
    return this.apiService.get(`checkouts/${checkoutId}`);
  }

  createCheckout(checkoutData: any): Observable<Models['Checkout']> {
    return this.apiService.post('checkouts', checkoutData);
  }

  updateCheckout(
    checkoutId: string,
    checkoutData: any,
  ): Observable<Models['Checkout']> {
    return this.apiService.patch(`checkouts/${checkoutId}`, checkoutData);
  }

  deleteCheckout(checkoutId: string): Observable<any> {
    return this.apiService.delete(`checkouts/${checkoutId}`);
  }
}
