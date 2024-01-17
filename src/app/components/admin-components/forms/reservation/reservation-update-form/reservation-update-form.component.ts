import { Component, Inject, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reservation-update-form',
  templateUrl: './reservation-update-form.component.html',
  styleUrls: ['./reservation-update-form.component.scss'],
})
export class ReservationUpdateFormComponent implements OnInit {
  reservationData: any = {};

  constructor(
    private reservationService: ReservationService,
    public dialogRef: MatDialogRef<ReservationUpdateFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    this.loadReservation();
  }

  loadReservation() {
    this.reservationService
      .getReservationById(this.data.reservationId)
      .subscribe((data) => {
        this.reservationData = data;
      });
  }

  onSubmit() {
    this.reservationService
      .updateReservation(this.data.reservationId, this.reservationData)
      .subscribe(() => {
        this.dialogRef.close();
      });
  }
}
