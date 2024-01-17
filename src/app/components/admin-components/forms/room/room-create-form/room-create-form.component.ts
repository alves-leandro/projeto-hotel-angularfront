import { Component } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-room-create-form',
  templateUrl: './room-create-form.component.html',
  styleUrls: ['./room-create-form.component.scss'],
})
export class RoomCreateFormComponent {
  roomData: any = {};
  statusOptions: string[] = ['AVAILABLE', 'OCCUPIED', 'UNDER_MAINTENANCE'];
  typeOptions: string[] = ['STANDARD', 'EXECUTIVE', 'DELUXE'];

  constructor(
    private roomService: RoomService,
    private dialogRef: MatDialogRef<RoomCreateFormComponent>,
  ) {}

  onSubmit() {
    this.roomService.createRoom(this.roomData).subscribe(
      (response) => {
        console.log('Sala criada com sucesso!', response);
        this.dialogRef.close();
      },
      (error) => {
        console.error('Erro ao criar sala:', error);
      },
    );
  }
}
