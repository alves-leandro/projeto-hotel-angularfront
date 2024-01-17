import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room-update-form',
  templateUrl: './room-update-form.component.html',
  styleUrls: ['./room-update-form.component.scss'],
})
export class RoomUpdateFormComponent implements OnInit {
  @Input() currentRoom: any;

  roomData: any = {};
  statusOptions: string[] = ['AVAILABLE', 'OCCUPIED', 'UNDER_MAINTENANCE'];
  typeOptions: string[] = ['STANDARD', 'EXECUTIVE', 'DELUXE'];

  constructor(
    private roomService: RoomService,
    private dialogRef: MatDialogRef<RoomUpdateFormComponent>,
  ) {}

  ngOnInit(): void {
    if (this.currentRoom) {
      this.roomData = { ...this.currentRoom };
    }
  }

  onSubmit() {
    if (this.currentRoom) {
      this.roomService
        .updateRoom(this.currentRoom.id, this.roomData)
        .subscribe(() => {
          // Lógica após a atualização
          // this.getAllRooms(); NÃO CONSEGUI FAZER ATUALIZAR
          this.dialogRef.close();
          console.log('Room atualizada com sucesso!');
        });
    }
  }
}
