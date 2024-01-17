import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Models } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class CheckinService {
  constructor(private apiService: ApiService) {}

  getAllCheckins(): Observable<Models['Checkin'][]> {
    return this.apiService.get('checkins');
  }

  getCheckinById(checkinId: string): Observable<Models['Checkin']> {
    return this.apiService.get(`checkins/${checkinId}`);
  }

  createCheckin(checkinData: any): Observable<Models['Checkin']> {
    return this.apiService.post('checkins', checkinData);
  }

  updateCheckin(
    checkinId: string,
    checkinData: any,
  ): Observable<Models['Checkin']> {
    return this.apiService.patch(`checkins/${checkinId}`, checkinData);
  }

  deleteCheckin(checkinId: string): Observable<any> {
    return this.apiService.delete(`checkins/${checkinId}`);
  }
}
