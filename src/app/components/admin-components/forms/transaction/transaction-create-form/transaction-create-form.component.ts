import { Component, EventEmitter, Inject, Output, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction-create-form',
  templateUrl: './transaction-create-form.component.html',
  styleUrls: ['./transaction-create-form.component.scss'],
})
export class TransactionCreateFormComponent implements OnInit {
  transactionData: any = {};
  reservationId: string;

  @Output() transactionCreated = new EventEmitter<{
    success: boolean;
    transactionData: any;
  }>();

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { reservationId: string },
    private transactionService: TransactionService,
    private dialogRef: MatDialogRef<TransactionCreateFormComponent>,
  ) {
    this.reservationId = data.reservationId;
  }

  ngOnInit() {
    this.reservationId = this.data.reservationId;
    this.transactionData = {
      reservationId: this.reservationId,
    };
  }

  onSubmit() {
    this.transactionService.createTransaction(this.transactionData).subscribe(
      (response) => {
        console.log('Transaction created successfully!', response);
        this.transactionCreated.emit({
          success: true,
          transactionData: response,
        });
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error creating transaction:', error);
        this.transactionCreated.emit({ success: false, transactionData: null });
      },
    );
  }
}
