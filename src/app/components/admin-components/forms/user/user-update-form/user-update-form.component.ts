import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-update-form',
  templateUrl: './user-update-form.component.html',
  styleUrls: ['./user-update-form.component.scss'],
})
export class UserUpdateFormComponent implements OnInit {
  userData: any = {};

  constructor(
    private userService: UserService,
    public dialogRef: MatDialogRef<UserUpdateFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
    this.userService.getUserById(this.data.userId).subscribe((data) => {
      this.userData = data;
    });
  }

  onSubmit() {
    this.userService
      .updateUser(this.data.userId, this.userData)
      .subscribe(() => {
        this.dialogRef.close();
      });
  }
}
