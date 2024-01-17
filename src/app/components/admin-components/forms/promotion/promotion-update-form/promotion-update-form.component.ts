import { Component, Inject, OnInit } from '@angular/core';
import { PromotionService } from 'src/app/services/promotion.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-promotion-update-form',
  templateUrl: './promotion-update-form.component.html',
  styleUrls: ['./promotion-update-form.component.scss'],
})
export class PromotionUpdateFormComponent implements OnInit {
  promotionData: any = {};

  constructor(
    private promotionService: PromotionService,
    public dialogRef: MatDialogRef<PromotionUpdateFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    this.loadPromotion();
  }

  loadPromotion() {
    this.promotionService
      .getPromotionById(this.data.promotionId)
      .subscribe((data) => {
        this.promotionData = data;
      });
  }

  onSubmit() {
    this.promotionService
      .updatePromotion(this.data.promotionId, this.promotionData)
      .subscribe(() => {
        this.dialogRef.close();
      });
  }
}
