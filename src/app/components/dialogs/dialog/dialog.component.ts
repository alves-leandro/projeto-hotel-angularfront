import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { RoomEditDialogComponent } from '../room-edit-dialog/room-edit-dialog.component';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-dialog',
  template: `
    <div class="dialog-content">
      <h2>{{ data.title }}</h2>
      <app-admin-room-card
        *ngIf="data.room"
        [room]="data.room"
        (edit)="onEdit($event)"
        (delete)="onDelete($event)"
      ></app-admin-room-card>
      <ng-container
        *ngComponentOutlet="data.component; injector: data.injector"
      ></ng-container>
    </div>
  `,
  styles: [
    `
      .dialog-content {
        text-align: center;
        padding: 16px;
      }
    `,
  ],
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private dialog: MatDialog,
    private roomService: RoomService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onEdit(room: any) {
    this.dialog.open(RoomEditDialogComponent, {
      width: '500px',
      data: {
        room,
        title: 'Update Room',
      },
    });
  }

  onDelete(room: any) {
    // Lógica para exclusão
    this.roomService.deleteRoom(room.id).subscribe(() => {
      console.log('Room deleted successfully!');
      this.dialogRef.close(); // Feche o dialog após exclusão
    });
  }
}
