import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-create-form',
  templateUrl: './employee-create-form.component.html',
  styleUrls: ['./employee-create-form.component.scss'],
})
export class EmployeeCreateFormComponent {
  employeeData: any = { rule: '' };
  allowedRoles: string[] = ['CLEANER', 'RECEPTIONIST', 'MANAGER', 'KITCHEN'];

  constructor(
    private userService: UserService,
    private dialogRef: MatDialogRef<EmployeeCreateFormComponent>,
  ) {}

  onSubmit() {
    this.userService.createUser(this.employeeData).subscribe(
      (response) => {
        console.log('Employee created successfully!', response);
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error creating employee:', error);
      },
    );
  }
}
