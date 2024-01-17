import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Models } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class ReservationDishService {
  constructor(private apiService: ApiService) {}

  getAllReservationDishes(): Observable<Models['ReservationDish'][]> {
    return this.apiService.get('reservations-dishes');
  }

  getReservationDishById(
    reservationDishId: string,
  ): Observable<Models['ReservationDish']> {
    return this.apiService.get(`reservations-dishes/${reservationDishId}`);
  }

  createReservationDish(
    reservationDishData: any,
  ): Observable<Models['ReservationDish']> {
    return this.apiService.post('reservations-dishes', reservationDishData);
  }

  updateReservationDish(
    reservationDishId: string,
    reservationDishData: any,
  ): Observable<Models['ReservationDish']> {
    return this.apiService.patch(
      `reservations-dishes/${reservationDishId}`,
      reservationDishData,
    );
  }

  deleteReservationDish(reservationDishId: string): Observable<any> {
    return this.apiService.delete(`reservations-dishes/${reservationDishId}`);
  }
}
