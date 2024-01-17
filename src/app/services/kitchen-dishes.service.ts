import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Models } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class KitchenDishesService {
  constructor(private apiService: ApiService) {}

  getAllKitchenDishes(): Observable<Models['KitchenDishes'][]> {
    return this.apiService.get('kitchen-dishes');
  }

  getKitchenDishById(
    kitchenDishesId: string,
  ): Observable<Models['KitchenDishes']> {
    return this.apiService.get(`kitchen-dishes/${kitchenDishesId}`);
  }

  createKitchenDish(kitchenDishData: any): Observable<Models['KitchenDishes']> {
    return this.apiService.post('kitchen-dishes', kitchenDishData);
  }

  updateKitchenDish(
    kitchenDishId: string,
    kitchenDishData: any,
  ): Observable<Models['KitchenDishes']> {
    return this.apiService.patch(
      `kitchen-dishes/${kitchenDishId}`,
      kitchenDishData,
    );
  }

  deleteKitchenDish(kitchenDishId: string): Observable<any> {
    return this.apiService.delete(`kitchen-dishes/${kitchenDishId}`);
  }
}
