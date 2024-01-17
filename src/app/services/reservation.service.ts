import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Models } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private apiService: ApiService) {}

  getAllReservations(): Observable<Models['Reservation'][]> {
    return this.apiService.get('reservations');
  }

  getReservationById(reservationId: string): Observable<Models['Reservation']> {
    return this.apiService.get(`reservations/${reservationId}`);
  }

  createReservation(reservationData: any): Observable<Models['Reservation']> {
    return this.apiService.post('reservations', reservationData);
  }

  updateReservation(
    reservationId: string,
    reservationData: any,
  ): Observable<Models['Reservation']> {
    return this.apiService.patch(
      `reservations/${reservationId}`,
      reservationData,
    );
  }

  deleteReservation(reservationId: string): Observable<any> {
    return this.apiService.delete(`reservations/${reservationId}`);
  }
}
