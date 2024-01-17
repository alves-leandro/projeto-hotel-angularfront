import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RoomBookingDialogComponent } from 'src/app/components/dialogs/room-booking-dialog/room-booking-dialog.component';
import { Models } from 'src/app/shared/models';

@Component({
  selector: 'app-booking-room-card',
  templateUrl: './booking-room-card.component.html',
  styleUrls: ['./booking-room-card.component.scss'],
})
export class BookingRoomCardComponent {
  @Input() room!: Models['Room'];
  @Input() checkinDate!: Date | undefined;
  @Input() checkoutDate!: Date | undefined;
  @Input() adultsCount = 1;
  @Input() childrenCount = 0;
  @Input() userData: {
    username: string;
    name: string;
    email: string;
    password: string;
    rule: string;
  } = {
    rule: 'GUEST',
    username: '',
    name: '',
    email: '',
    password: '',
  };

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {}

  hasRoomData(): boolean {
    return !!this.room && !!this.room.imageUrl;
  }

  getRoomImage(): string {
    return this.hasRoomData()
      ? this.room.imageUrl
      : 'https://stock.adobe.com/br/images/no-image-available-sign-internet-web-icon-to-indicate-the-absence-of-image-until-it-will-be-downloaded/89551596';
  }

  calculateTotalCost(): number {
    let totalValue = this.room.value || 0;

    const additionalPersonCost = 70;
    totalValue +=
      Math.max(this.adultsCount - this.room.capacityAdults, 0) *
        additionalPersonCost +
      Math.max(this.childrenCount - this.room.capacityChildren, 0) *
        additionalPersonCost;

    if (this.checkinDate && this.checkoutDate) {
      const timeDifference =
        this.checkoutDate.getTime() - this.checkinDate.getTime();
      const nights = Math.ceil(timeDifference / (1000 * 3600 * 24));

      totalValue *= nights;
    }

    return totalValue;
  }

  openRoomDetailsDialog(): void {
    console.log('Abrindo diálogo para o booking-room-card:', this.room);
    const dialogRef = this.dialog.open(RoomBookingDialogComponent, {
      width: '400px',
      data: {
        room: this.room,
        initialDate: this.checkinDate,
        endDate: this.checkoutDate,
        adults: this.adultsCount,
        children: this.childrenCount,
        userData: this.userData,
      },
    });

    dialogRef.componentInstance.reservationCompleted.subscribe(() => {
      this.mostrarMensagemDeSucesso();
    });
  }

  mostrarMensagemDeSucesso(): void {
    this.snackBar.open('Reserva realizada com sucesso!', 'Fechar', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: ['snackbar-success'],
    });
  }
}
