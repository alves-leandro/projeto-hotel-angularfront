import { Component } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss'],
})
export class BookingFormComponent {
  checkinDate: Date = new Date();
  checkoutDate: Date = new Date();
  numberOfGuests = 1;
  adultsCount = 1;
  childrenCount = 0;
  rooms: any[] = [];
  selectedRoom: any;

  constructor(private roomService: RoomService) {}

  onSubmit() {
    if (!this.checkinDate || !this.checkoutDate) {
      this.checkinDate = new Date();
      const checkoutDate = new Date(this.checkinDate);
      checkoutDate.setDate(this.checkinDate.getDate() + 1);
      this.checkoutDate = checkoutDate;
    }

    this.roomService
      .getAndSetAvailableRooms(
        this.numberOfGuests,
        this.childrenCount,
        this.checkinDate,
        this.checkoutDate,
      )
      .subscribe(
        (data) => {
          console.log('Quartos disponíveis recebidos:', data);
          this.rooms = data;
        },
        (error) => {
          console.error('Erro ao obter quartos disponíveis:', error);
        },
      );
  }

  onDateRangeChange(event: { start: Date; end: Date }) {
    this.checkinDate = event.start || new Date();
    this.checkoutDate = event.end || new Date();
  }

  calculateTotalGuests(): number {
    return this.adultsCount + this.childrenCount;
  }

  onDateRangeInput(event: any) {
    this.checkinDate = event.start || new Date();
    this.checkoutDate = event.end || new Date();
  }

  counterArrayAdults(count: number): number[] {
    return Array.from({ length: count }, (_, index) => index + 1);
  }

  counterArrayChildrens(count: number): number[] {
    return Array.from({ length: count + 1 }, (_, index) => index);
  }

  calculateDateRange(): number {
    if (this.checkinDate && this.checkoutDate) {
      const timeDifference =
        this.checkoutDate.getTime() - this.checkinDate.getTime();
      const daysDifference = timeDifference / (1000 * 3600 * 24);
      return Math.floor(daysDifference);
    }
    return 0;
  }
}
