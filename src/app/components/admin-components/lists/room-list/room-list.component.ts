import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialogs/dialog/dialog.component';
import { RoomService } from 'src/app/services/room.service';
import { Models } from 'src/app/shared/models';

import { RoomCreateFormComponent } from '../../../admin-components/forms/room/room-create-form/room-create-form.component';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent implements OnInit {
  selectedRoomId: string | null = null;
  rooms: Models['Room'][] = [];

  constructor(
    private roomService: RoomService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getAllRooms();
  }

  getAllRooms() {
    this.roomService.getAllRooms().subscribe((rooms) => {
      this.rooms = rooms;
    });
  }

  openCreateRoomDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        title: 'Create Room',
        component: RoomCreateFormComponent,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAllRooms();
    });
  }

  openRoomDetailsDialog(room: Models['Room']) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        title: 'Room Details',
        room: room,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAllRooms();
    });
  }

  onCancelEdit() {
    this.selectedRoomId = null;
    this.getAllRooms();
  }

  getCardClass(status: string): string[] {
    switch (status) {
      case 'AVAILABLE':
        return ['available-status'];
      case 'UNDER_MAINTENANCE':
        return ['maintenance-status'];
      case 'OCCUPIED':
        return ['occupied-status'];
      default:
        return [];
    }
  }
}
