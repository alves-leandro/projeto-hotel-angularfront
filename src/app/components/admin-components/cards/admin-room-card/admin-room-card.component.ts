import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Models } from 'src/app/shared/models';

@Component({
  selector: 'app-admin-room-card',
  templateUrl: './admin-room-card.component.html',
  styleUrls: ['./admin-room-card.component.scss'],
})
export class AdminRoomCardComponent {
  @Input() room!: Models['Room'];
  @Output() edit = new EventEmitter<Models['Room']>();
  @Output() delete = new EventEmitter<Models['Room']>();

  getCardClass(): string[] {
    const classes: string[] = [];

    // Implemente a lógica para determinar as classes com base no status
    if (this.room.status === 'AVAILABLE') {
      classes.push('available-status');
    } else if (this.room.status === 'UNDER_MAINTENANCE') {
      classes.push('maintenance-status');
    } else if (this.room.status === 'OCCUPIED') {
      classes.push('occupied-status');
    }

    return classes;
  }
}
