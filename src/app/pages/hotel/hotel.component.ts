import { Component } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { RoomBookingDialogComponent } from 'src/app/components/dialogs/room-booking-dialog/room-booking-dialog.component';
// import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
})
export class HotelComponent {
  // checkinDate: Date = new Date();
  // checkoutDate: Date = new Date();
  // numberOfGuests = 1;
  // adultsCount = 1;
  // childrenCount = 0;
  // rooms: any[] = [];
  // selectedRoom: any;
  // constructor(
  //   private roomService: RoomService,
  //   private dialog: MatDialog,
  // ) {}
  // onSubmit() {
  //   if (!this.checkinDate || !this.checkoutDate) {
  //     this.checkinDate = new Date();
  //     // Adicionar um dia à data de checkin
  //     const checkoutDate = new Date(this.checkinDate);
  //     checkoutDate.setDate(this.checkinDate.getDate() + 1);
  //     this.checkoutDate = checkoutDate;
  //   }
  //   this.roomService
  //     .getAndSetAvailableRooms(
  //       this.numberOfGuests,
  //       this.childrenCount,
  //       this.checkinDate,
  //       this.checkoutDate,
  //     )
  //     .subscribe(
  //       (data) => {
  //         this.rooms = data;
  //         console.log('Quartos disponíveis:', this.rooms);
  //       },
  //       (error) => {
  //         console.error('Erro ao obter quartos disponíveis:', error);
  //       },
  //     );
  // }
  // openRoomDetailsDialog(room: any): void {
  //   // Atribuir o quarto selecionado e abrir o diálogo somente se um quarto foi selecionado
  //   if (room) {
  //     const dialogRef = this.dialog.open(RoomBookingDialogComponent, {
  //       width: '400px',
  //       data: {
  //         room: room,
  //         initialDate: this.checkinDate,
  //         endDate: this.checkoutDate,
  //         adults: this.adultsCount,
  //         children: this.childrenCount,
  //       },
  //     });
  //     dialogRef.afterClosed().subscribe((result) => {
  //       console.log('Resultado do diálogo de hotel:', result);
  //     });
  //   }
  // }
  // onDateRangeChange(event: { start: Date; end: Date }) {
  //   this.checkinDate = event.start || new Date();
  //   this.checkoutDate = event.end || new Date();
  // }
  // calculateTotalGuests(): number {
  //   return this.adultsCount + this.childrenCount;
  // }
  // onDateRangeInput(event: any) {
  //   this.checkinDate = event.start || new Date();
  //   this.checkoutDate = event.end || new Date();
  // }
  // counterArrayAdults(count: number): number[] {
  //   return Array.from({ length: count }, (_, index) => index + 1);
  // }
  // counterArrayChildrens(count: number): number[] {
  //   return Array.from({ length: count + 1 }, (_, index) => index);
  // }
  // calculateDateRange(): number {
  //   if (this.checkinDate && this.checkoutDate) {
  //     const timeDifference =
  //       this.checkoutDate.getTime() - this.checkinDate.getTime();
  //     const daysDifference = timeDifference / (1000 * 3600 * 24);
  //     return Math.floor(daysDifference);
  //   }
  //   return 0;
  // }
}
