import { Component, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-room-booking-dialog',
  template: `
    <div class="dialog-container">
      <h2 mat-dialog-title>Detalhes do Quarto</h2>
      <mat-dialog-content>
        <div class="about-dialog-container" fxLayout fxLayout.xs="column">
          <div class="room-side">
            <p>Número do Quarto: {{ data.room.number }}</p>
            <p>Check-in: {{ data.initialDate | date: 'dd/MM/yyyy' }}</p>
            <p>Check-out: {{ data.endDate | date: 'dd/MM/yyyy' }}</p>
            <p>Adultos: {{ data.adults }}</p>
            <p>Crianças: {{ data.children }}</p>
          </div>
          <div class="register-side">
            <ng-container *ngIf="!hasToken()">
              <app-user-create-form
                [userData]="data.userData"
              ></app-user-create-form>
            </ng-container>
          </div>
        </div>
      </mat-dialog-content>
      <mat-dialog-actions>
        <ng-container *ngIf="hasToken()">
          <button mat-raised-button (click)="createReservation()">
            Reservar
          </button>
        </ng-container>
      </mat-dialog-actions>
    </div>
  `,
})
export class RoomBookingDialogComponent {
  reservationCompleted = new EventEmitter<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService,
    private reservationService: ReservationService,
    private dialogRef: MatDialogRef<RoomBookingDialogComponent>,
  ) {
    console.log('Dados do room-booking-dialog:', data.room);
  }

  hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  createReservation(): void {
    const userId = this.authService.getUserDetails()?.id;
    if (!userId) {
      console.error('UserID not found.');
      return;
    }

    console.log('userId', userId);

    const reservationData = {
      userId: userId,
      roomId: this.data.room.id,
      adults: this.data.adults,
      children: this.data.children,
      initialDate: this.data.initialDate,
      endDate: this.data.endDate,
      promotionId: this.data.promotionId,
    };

    this.reservationService.createReservation(reservationData).subscribe(
      (response) => {
        console.log('Reservation created successfully!', response);
        this.reservationCompleted.emit();
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error creating reservation:', error);
      },
    );
  }
}
