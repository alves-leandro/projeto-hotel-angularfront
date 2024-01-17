import { Component, Inject, OnInit } from '@angular/core';
import { ReservationDishService } from 'src/app/services/reservation-dish.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reservation-dishes-update-form',
  templateUrl: './reservation-dishes-update-form.component.html',
  styleUrls: ['./reservation-dishes-update-form.component.scss'],
})
export class ReservationDishesUpdateFormComponent implements OnInit {
  reservationDishData: any = {};

  constructor(
    private reservationDishService: ReservationDishService,
    public dialogRef: MatDialogRef<ReservationDishesUpdateFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    this.loadReservationDish();
  }

  loadReservationDish() {
    this.reservationDishService
      .getReservationDishById(this.data.reservationDishId)
      .subscribe((data) => {
        this.reservationDishData = data;
      });
  }

  onSubmit() {
    this.reservationDishService
      .updateReservationDish(
        this.data.reservationDishId,
        this.reservationDishData,
      )
      .subscribe(() => {
        this.dialogRef.close();
      });
  }
}
