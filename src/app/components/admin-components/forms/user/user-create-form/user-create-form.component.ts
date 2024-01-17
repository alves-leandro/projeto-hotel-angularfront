import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-create-form',
  templateUrl: './user-create-form.component.html',
  styleUrls: ['./user-create-form.component.scss'],
})
export class UserCreateFormComponent {
  @Input() userData: any = { rule: 'GUEST' };

  constructor(
    private userService: UserService,
    private dialogRef: MatDialogRef<UserCreateFormComponent>,
  ) {}

  onSubmit() {
    this.userService.createUser(this.userData).subscribe(
      (response) => {
        console.log('User created successfully!', response);
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error creating user:', error);
      },
    );
  }
}
