import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-update-form',
  templateUrl: './employee-update-form.component.html',
  styleUrls: ['./employee-update-form.component.scss'],
})
export class EmployeeUpdateFormComponent implements OnInit {
  employeeData: any = { rule: '' };
  allowedRoles: string[] = ['CLEANER', 'RECEPTIONIST', 'MANAGER', 'KITCHEN'];

  constructor(
    private userService: UserService,
    public dialogRef: MatDialogRef<EmployeeUpdateFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    this.loadEmployee();
  }

  loadEmployee() {
    this.userService.getUserById(this.data.employeeId).subscribe((data) => {
      this.employeeData = data;
    });
  }

  onSubmit() {
    this.userService
      .updateUser(this.data.employeeId, this.employeeData)
      .subscribe(() => {
        this.dialogRef.close();
      });
  }
}
