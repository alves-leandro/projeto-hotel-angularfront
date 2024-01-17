import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KitchenDishesService } from 'src/app/services/kitchen-dishes.service';
import { DialogComponent } from 'src/app/components/dialogs/dialog/dialog.component';
import { KitchenDishesCreateFormComponent } from '../../../admin-components/forms/kitchen-dishes/kitchen-dishes-create-form/kitchen-dishes-create-form.component';
import { KitchenDishesUpdateFormComponent } from '../../../admin-components/forms/kitchen-dishes/kitchen-dishes-update-form/kitchen-dishes-update-form.component';
import { Models } from 'src/app/shared/models';

@Component({
  selector: 'app-kitchen-dishes-list',
  templateUrl: './kitchen-dishes-list.component.html',
  styleUrls: ['./kitchen-dishes-list.component.scss'],
})
export class KitchenDishesListComponent implements OnInit {
  kitchenDishes: Models['KitchenDishes'][] = [];
  displayedColumns: string[] = ['name', 'description', 'price', 'actions'];

  constructor(
    private kitchenDishesService: KitchenDishesService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getAllKitchenDishes();
  }

  getAllKitchenDishes() {
    this.kitchenDishesService
      .getAllKitchenDishes()
      .subscribe((data: Models['KitchenDishes'][]) => {
        this.kitchenDishes = data;
      });
  }

  openCreateKitchenDishDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        title: 'Create Kitchen Dish',
        component: KitchenDishesCreateFormComponent,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAllKitchenDishes();
    });
  }

  openUpdateKitchenDishDialog(kitchenDishId: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        kitchenDishId,
        title: 'Update Kitchen Dish',
        component: KitchenDishesUpdateFormComponent,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAllKitchenDishes();
    });
  }

  onDeleteClick(kitchenDishId: string) {
    this.kitchenDishesService.deleteKitchenDish(kitchenDishId).subscribe(() => {
      this.getAllKitchenDishes();
    });
  }
}
