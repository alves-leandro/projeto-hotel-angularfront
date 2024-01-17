import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { DialogComponent } from 'src/app/components/dialogs/dialog/dialog.component';
import { UserCreateFormComponent } from '../../../admin-components/forms/user/user-create-form/user-create-form.component';
import { UserUpdateFormComponent } from '../../../admin-components/forms/user/user-update-form/user-update-form.component';
import { Models } from 'src/app/shared/models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  guests: Models['User'][] = [];
  employees: Models['User'][] = [];
  selectedUserId: string | null = null;

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((data: Models['User'][]) => {
      this.guests = data.filter((user) => user.rule === 'GUEST');
      this.employees = data.filter((user) => user.rule !== 'GUEST');
    });
  }

  openCreateUserDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        title: 'Create User',
        component: UserCreateFormComponent,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAllUsers();
    });
  }

  openUpdateUserDialog(userId: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        userId,
        title: 'Update User',
        component: UserUpdateFormComponent,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAllUsers();
    });
  }

  onDeleteClick(userId: string) {
    this.userService.deleteUser(userId).subscribe(() => {
      this.getAllUsers();
      this.selectedUserId = null;
    });
  }
}
