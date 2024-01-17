import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Models } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class SuppliesService {
  constructor(private apiService: ApiService) {}

  getAllSupplies(): Observable<Models['Supplies'][]> {
    return this.apiService.get('supplies');
  }

  getSuppliesById(suppliesId: string): Observable<Models['Supplies']> {
    return this.apiService.get(`supplies/${suppliesId}`);
  }

  createSupplies(suppliesData: any): Observable<Models['Supplies']> {
    return this.apiService.post('supplies', suppliesData);
  }

  updateSupplies(
    suppliesId: string,
    suppliesData: any,
  ): Observable<Models['Supplies']> {
    return this.apiService.patch(`supplies/${suppliesId}`, suppliesData);
  }

  deleteSupplies(suppliesId: string): Observable<any> {
    return this.apiService.delete(`supplies/${suppliesId}`);
  }
}
