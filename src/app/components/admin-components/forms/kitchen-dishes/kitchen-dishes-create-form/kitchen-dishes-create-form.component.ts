import { Component } from '@angular/core';
import { KitchenDishesService } from 'src/app/services/kitchen-dishes.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-kitchen-dishes-create-form',
  templateUrl: './kitchen-dishes-create-form.component.html',
  styleUrls: ['./kitchen-dishes-create-form.component.scss'],
})
export class KitchenDishesCreateFormComponent {
  kitchenDishData: any = {};

  constructor(
    private kitchenDishesService: KitchenDishesService,
    private dialogRef: MatDialogRef<KitchenDishesCreateFormComponent>,
  ) {}

  onSubmit() {
    this.kitchenDishesService.createKitchenDish(this.kitchenDishData).subscribe(
      (response) => {
        console.log('Kitchen Dish created successfully!', response);
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error creating Kitchen Dish:', error);
      },
    );
  }
}
