import { Component } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reservation-create-form',
  templateUrl: './reservation-create-form.component.html',
  styleUrls: ['./reservation-create-form.component.scss'],
})
export class ReservationCreateFormComponent {
  reservationData: any = {};

  constructor(
    private reservationService: ReservationService,
    private dialogRef: MatDialogRef<ReservationCreateFormComponent>,
  ) {}

  onSubmit() {
    this.reservationService.createReservation(this.reservationData).subscribe(
      (response) => {
        console.log('Reservation created successfully!', response);
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error creating reservation:', error);
      },
    );
  }
}
