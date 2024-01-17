import { Component, Inject, OnInit } from '@angular/core';
import { ReservationSuppliesService } from 'src/app/services/reservation-supplies.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Models } from 'src/app/shared/models';
import { SuppliesService } from 'src/app/services/supplies.service';

@Component({
  selector: 'app-reservation-supplies-create-form',
  templateUrl: './reservation-supplies-create-form.component.html',
  styleUrls: ['./reservation-supplies-create-form.component.scss'],
})
export class ReservationSuppliesCreateFormComponent implements OnInit {
  reservationSupplyData: any = {};
  supplies: Models['Supplies'][] = [];
  reservationId: string;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { title: string; reservationId: string },
    private reservationSuppliesService: ReservationSuppliesService,
    private suppliesService: SuppliesService,
    private dialogRef: MatDialogRef<ReservationSuppliesCreateFormComponent>,
  ) {
    this.reservationId = data.reservationId;
  }

  ngOnInit() {
    this.reservationSupplyData = {
      reservationId: this.data.reservationId,
    };

    this.getAllSupplies();
  }

  onSubmit() {
    this.reservationSuppliesService
      .createReservationSupplies(this.reservationSupplyData)
      .subscribe(
        (response) => {
          console.log('Reservation Supply created successfully!', response);
          this.dialogRef.close();
        },
        (error) => {
          console.error('Error creating Reservation Supply:', error);
        },
      );
  }

  getAllSupplies() {
    this.suppliesService.getAllSupplies().subscribe(
      (data: Models['Supplies'][]) => {
        this.supplies = data;
      },
      (error: any) => {
        console.error('Error fetching supplies:', error);
      },
    );
  }
}
