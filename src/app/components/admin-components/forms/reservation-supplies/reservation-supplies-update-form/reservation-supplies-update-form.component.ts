import { Component, Inject, OnInit } from '@angular/core';
import { ReservationSuppliesService } from 'src/app/services/reservation-supplies.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reservation-supplies-update-form',
  templateUrl: './reservation-supplies-update-form.component.html',
  styleUrls: ['./reservation-supplies-update-form.component.scss'],
})
export class ReservationSuppliesUpdateFormComponent implements OnInit {
  reservationSupplyData: any = {};

  constructor(
    private reservationSuppliesService: ReservationSuppliesService,
    public dialogRef: MatDialogRef<ReservationSuppliesUpdateFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    this.loadReservationSupply();
  }

  loadReservationSupply() {
    this.reservationSuppliesService
      .getReservationSuppliesById(this.data.reservationSupplyId)
      .subscribe((data) => {
        this.reservationSupplyData = data;
      });
  }

  onSubmit() {
    this.reservationSuppliesService
      .updateReservationSupplies(
        this.data.reservationSupplyId,
        this.reservationSupplyData,
      )
      .subscribe(() => {
        this.dialogRef.close();
      });
  }
}
