import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Models } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  constructor(private apiService: ApiService) {}

  getAllPromotions(): Observable<Models['Promotion'][]> {
    return this.apiService.get('promotions');
  }

  getPromotionById(promotionId: string): Observable<Models['Promotion']> {
    return this.apiService.get(`promotions/${promotionId}`);
  }

  createPromotion(promotionData: any): Observable<Models['Promotion']> {
    return this.apiService.post('promotions', promotionData);
  }

  updatePromotion(
    promotionId: string,
    promotionData: any,
  ): Observable<Models['Promotion']> {
    return this.apiService.patch(`promotions/${promotionId}`, promotionData);
  }

  deletePromotion(promotionId: string): Observable<any> {
    return this.apiService.delete(`promotions/${promotionId}`);
  }
}
