import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-room-edit-dialog',
  template: `
    <div class="dialog-content">
      <h2>{{ data.title }}</h2>
      <app-room-update-form [currentRoom]="data.room"> </app-room-update-form>
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
export class RoomEditDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RoomEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
}
