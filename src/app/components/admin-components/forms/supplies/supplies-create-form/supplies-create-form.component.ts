import { Component } from '@angular/core';
import { SuppliesService } from 'src/app/services/supplies.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-supplies-create-form',
  templateUrl: './supplies-create-form.component.html',
  styleUrls: ['./supplies-create-form.component.scss'],
})
export class SuppliesCreateFormComponent {
  suppliesData: any = {};

  constructor(
    private suppliesService: SuppliesService,
    private dialogRef: MatDialogRef<SuppliesCreateFormComponent>,
  ) {}

  onSubmit() {
    this.suppliesService.createSupplies(this.suppliesData).subscribe(
      (response) => {
        console.log('Supplies created successfully!', response);
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error creating Supplies:', error);
      },
    );
  }
}
