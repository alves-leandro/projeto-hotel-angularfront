import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PromotionService } from 'src/app/services/promotion.service';
import { DialogComponent } from 'src/app/components/dialogs/dialog/dialog.component';
import { PromotionCreateFormComponent } from '../../../admin-components/forms/promotion/promotion-create-form/promotion-create-form.component';
import { PromotionUpdateFormComponent } from '../../../admin-components/forms/promotion/promotion-update-form/promotion-update-form.component';
import { Models } from 'src/app/shared/models';

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.scss'],
})
export class PromotionListComponent implements OnInit {
  promotions: Models['Promotion'][] = [];
  selectedPromotionId: string | null = null;

  constructor(
    private promotionService: PromotionService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getAllPromotions();
  }

  getAllPromotions() {
    this.promotionService
      .getAllPromotions()
      .subscribe((data: Models['Promotion'][]) => {
        this.promotions = data;
      });
  }

  openCreatePromotionDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        title: 'Create Promotion',
        component: PromotionCreateFormComponent,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAllPromotions();
    });
  }

  openUpdatePromotionDialog(promotionId: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        promotionId,
        title: 'Update Promotion',
        component: PromotionUpdateFormComponent,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAllPromotions();
    });
  }

  onDeleteClick(promotionId: string) {
    this.promotionService.deletePromotion(promotionId).subscribe(() => {
      this.getAllPromotions();
      this.selectedPromotionId = null;
    });
  }
}
