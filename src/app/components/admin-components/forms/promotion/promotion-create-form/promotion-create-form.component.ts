import { Component } from '@angular/core';
import { PromotionService } from 'src/app/services/promotion.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-promotion-create-form',
  templateUrl: './promotion-create-form.component.html',
  styleUrls: ['./promotion-create-form.component.scss'],
})
export class PromotionCreateFormComponent {
  promotionData: any = {};

  constructor(
    private promotionService: PromotionService,
    private dialogRef: MatDialogRef<PromotionCreateFormComponent>,
  ) {}

  onSubmit() {
    this.promotionService.createPromotion(this.promotionData).subscribe(
      (response) => {
        console.log('Promotion created successfully!', response);
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error creating promotion:', error);
      },
    );
  }
}
