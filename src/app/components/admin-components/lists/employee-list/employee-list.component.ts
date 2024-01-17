import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeCreateFormComponent } from 'src/app/components/admin-components/forms/employee/employee-create-form/employee-create-form.component';
import { DialogComponent } from 'src/app/components/dialogs/dialog/dialog.component';
import { UserUpdateFormComponent } from 'src/app/components/admin-components/forms/user/user-update-form/user-update-form.component';
import { UserService } from 'src/app/services/user.service';
import { Models } from 'src/app/shared/models';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  employees: Models['User'][] = [];
  displayedColumns: string[] = ['username', 'name', 'email', 'rule', 'actions'];

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.userService.getAllUsers().subscribe((data: Models['User'][]) => {
      this.employees = data.filter((user) => user.rule !== 'GUEST');
    });
  }

  openCreateEmployeeDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        title: 'Create Employee',
        component: EmployeeCreateFormComponent,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAllEmployees();
    });
  }

  openUpdateEmployeeDialog(employeeId: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        title: 'Update Employee',
        component: UserUpdateFormComponent,
        userId: employeeId,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAllEmployees();
    });
  }

  onDeleteClick(employeeId: string) {
    this.userService.deleteUser(employeeId).subscribe(() => {
      this.getAllEmployees();
    });
  }
}
