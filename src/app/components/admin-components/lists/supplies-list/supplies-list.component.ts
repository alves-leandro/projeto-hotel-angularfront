import { DialogComponent } from 'src/app/components/dialogs/dialog/dialog.component';
import { SuppliesUpdateFormComponent } from '../../forms/supplies/supplies-update-form/supplies-update-form.component';
import { SuppliesCreateFormComponent } from '../../forms/supplies/supplies-create-form/supplies-create-form.component';
import { Models } from 'src/app/shared/models';
import { MatDialog } from '@angular/material/dialog';
import { SuppliesService } from 'src/app/services/supplies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplies-list',
  templateUrl: './supplies-list.component.html',
  styleUrls: ['./supplies-list.component.scss'],
})
export class SuppliesListComponent implements OnInit {
  supplies: Models['Supplies'][] = [];
  displayedColumns: string[] = [
    'name',
    'description',
    'price',
    'stock',
    'actions',
  ];

  constructor(
    private suppliesService: SuppliesService, // Use your service
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getAllSupplies();
  }

  getAllSupplies() {
    this.suppliesService
      .getAllSupplies()
      .subscribe((data: Models['Supplies'][]) => {
        this.supplies = data;
      });
  }

  openCreateSuppliesDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        title: 'Create Supplies',
        component: SuppliesCreateFormComponent,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAllSupplies();
    });
  }

  openUpdateSuppliesDialog(suppliesId: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        suppliesId,
        title: 'Update Supplies',
        component: SuppliesUpdateFormComponent,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAllSupplies();
    });
  }

  onDeleteClick(suppliesId: string) {
    this.suppliesService.deleteSupplies(suppliesId).subscribe(() => {
      this.getAllSupplies();
    });
  }
}
