import { Component, Inject, OnInit } from '@angular/core';
import { ReservationDishService } from 'src/app/services/reservation-dish.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Models } from 'src/app/shared/models';
import { KitchenDishesService } from 'src/app/services/kitchen-dishes.service';

@Component({
  selector: 'app-reservation-dishes-create-form',
  templateUrl: './reservation-dishes-create-form.component.html',
  styleUrls: ['./reservation-dishes-create-form.component.scss'],
})
export class ReservationDishesCreateFormComponent implements OnInit {
  reservationDishData: any = {};
  kitchenDishes: Models['KitchenDishes'][] = [];
  reservationId: string;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { title: string; reservationId: string },
    private reservationDishesService: ReservationDishService,
    private kitchenDishesService: KitchenDishesService,
    private dialogRef: MatDialogRef<ReservationDishesCreateFormComponent>,
  ) {
    this.reservationId = data.reservationId;
  }

  ngOnInit() {
    this.reservationDishData = {
      reservationId: this.data.reservationId,
    };

    console.log('Initial reservationDishData:', this.reservationDishData);
    console.log('Reservation ID in Form:', this.data.reservationId);
    this.getAllKitchenDishes();
  }

  onSubmit() {
    this.reservationDishData.reservationId = this.reservationId;

    this.reservationDishesService
      .createReservationDish(this.reservationDishData)
      .subscribe(
        (response) => {
          console.log('Reservation Dish created successfully!', response);
          this.dialogRef.close();
        },
        (error) => {
          console.error('Error creating Reservation Dish:', error);
        },
      );
  }

  getAllKitchenDishes() {
    this.kitchenDishesService.getAllKitchenDishes().subscribe(
      (data: Models['KitchenDishes'][]) => {
        this.kitchenDishes = data;
      },
      (error: any) => {
        console.error('Error fetching kitchen dishes:', error);
      },
    );
  }
}
