import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Models } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private apiService: ApiService) {}

  getAndSetAvailableRooms(
    adults: number,
    children: number,
    initialDate: Date | undefined,
    endDate: Date | undefined,
  ): Observable<any[]> {
    return this.getAvailableRooms(adults, children, initialDate, endDate);
  }

  createRoom(roomData: Models['Room']): Observable<Models['Room']> {
    return this.apiService.post<Models['Room']>('rooms', roomData);
  }

  getAllRooms(): Observable<Models['Room'][]> {
    return this.apiService.get<Models['Room'][]>('rooms');
  }

  getRoomById(roomId: string): Observable<Models['Room']> {
    return this.apiService.get<Models['Room']>(`rooms/${roomId}`);
  }

  updateRoom(
    roomId: string,
    roomData: Models['Room'],
  ): Observable<Models['Room']> {
    return this.apiService.patch<Models['Room']>(`rooms/${roomId}`, roomData);
  }

  deleteRoom(roomId: string): Observable<Models['Room']> {
    return this.apiService.delete<Models['Room']>(`rooms/${roomId}`);
  }

  private getAvailableRooms(
    adults = 1,
    children = 0,
    initialDate?: Date,
    endDate?: Date,
  ): Observable<any[]> {
    const start = initialDate
      ? initialDate.toISOString()
      : new Date().toISOString();
    const end = endDate ? endDate.toISOString() : new Date().toISOString();

    const url = `rooms/available-rooms?adults=${adults}&children=${children}&initialDate=${start}&endDate=${end}`;

    return this.apiService.get<any[]>(url);
  }
}
