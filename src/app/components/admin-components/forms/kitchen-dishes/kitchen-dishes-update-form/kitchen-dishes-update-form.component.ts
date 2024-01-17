import { Component, Inject, OnInit } from '@angular/core';
import { KitchenDishesService } from 'src/app/services/kitchen-dishes.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-kitchen-dishes-update-form',
  templateUrl: './kitchen-dishes-update-form.component.html',
  styleUrls: ['./kitchen-dishes-update-form.component.scss'],
})
export class KitchenDishesUpdateFormComponent implements OnInit {
  kitchenDishData: any = {};

  constructor(
    private kitchenDishesService: KitchenDishesService,
    public dialogRef: MatDialogRef<KitchenDishesUpdateFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    this.loadKitchenDish();
  }

  loadKitchenDish() {
    this.kitchenDishesService
      .getKitchenDishById(this.data.kitchenDishId)
      .subscribe((data) => {
        this.kitchenDishData = data;
      });
  }

  onSubmit() {
    this.kitchenDishesService
      .updateKitchenDish(this.data.kitchenDishId, this.kitchenDishData)
      .subscribe(() => {
        this.dialogRef.close();
      });
  }
}
