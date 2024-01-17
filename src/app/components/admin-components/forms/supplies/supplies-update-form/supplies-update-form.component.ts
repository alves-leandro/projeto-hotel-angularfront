import { Component, Inject, OnInit } from '@angular/core';
import { SuppliesService } from 'src/app/services/supplies.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-supplies-update-form',
  templateUrl: './supplies-update-form.component.html',
  styleUrls: ['./supplies-update-form.component.scss'],
})
export class SuppliesUpdateFormComponent implements OnInit {
  suppliesData: any = {};

  constructor(
    private suppliesService: SuppliesService,
    public dialogRef: MatDialogRef<SuppliesUpdateFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    this.loadSupplies();
  }

  loadSupplies() {
    this.suppliesService
      .getSuppliesById(this.data.suppliesId)
      .subscribe((data) => {
        this.suppliesData = data;
      });
  }

  onSubmit() {
    this.suppliesService
      .updateSupplies(this.data.suppliesId, this.suppliesData)
      .subscribe(() => {
        this.dialogRef.close();
      });
  }
}
