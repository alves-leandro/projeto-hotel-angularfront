import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Models } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class ReservationSuppliesService {
  constructor(private apiService: ApiService) {}

  getAllReservationSupplies(): Observable<Models['ReservationSupplies'][]> {
    return this.apiService.get('reservations-supplies');
  }

  getReservationSuppliesById(
    reservationSuppliesId: string,
  ): Observable<Models['ReservationSupplies']> {
    return this.apiService.get(
      `reservations-supplies/${reservationSuppliesId}`,
    );
  }

  createReservationSupplies(
    reservationSuppliesData: any,
  ): Observable<Models['ReservationSupplies']> {
    return this.apiService.post(
      'reservations-supplies',
      reservationSuppliesData,
    );
  }

  updateReservationSupplies(
    reservationSuppliesId: string,
    reservationSuppliesData: any,
  ): Observable<Models['ReservationSupplies']> {
    return this.apiService.patch(
      `reservations-supplies/${reservationSuppliesId}`,
      reservationSuppliesData,
    );
  }

  deleteReservationSupplies(reservationSuppliesId: string): Observable<any> {
    return this.apiService.delete(
      `reservations-supplies/${reservationSuppliesId}`,
    );
  }
}
