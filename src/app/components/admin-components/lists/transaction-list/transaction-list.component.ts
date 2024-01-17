import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TransactionService } from 'src/app/services/transaction.service';
import { DialogComponent } from 'src/app/components/dialogs/dialog/dialog.component';
import { TransactionCreateFormComponent } from '../../../admin-components/forms/transaction/transaction-create-form/transaction-create-form.component';
import { TransactionUpdateFormComponent } from '../../../admin-components/forms/transaction/transaction-update-form/transaction-update-form.component';
import { Models } from 'src/app/shared/models';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
})
export class TransactionListComponent implements OnInit {
  transactions: Models['Transaction'][] = [];
  selectedTransactionId: string | null = null;

  constructor(
    private transactionService: TransactionService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getAllTransactions();
  }

  getAllTransactions() {
    this.transactionService
      .getAllTransactions()
      .subscribe((data: Models['Transaction'][]) => {
        this.transactions = data;
      });
  }

  openCreateTransactionDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        title: 'Create Transaction',
        component: TransactionCreateFormComponent,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAllTransactions();
    });
  }

  openUpdateTransactionDialog(transactionId: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        transactionId,
        title: 'Update Transaction',
        component: TransactionUpdateFormComponent,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAllTransactions();
    });
  }

  onDeleteClick(transactionId: string) {
    this.transactionService.deleteTransaction(transactionId).subscribe(() => {
      this.getAllTransactions();
      this.selectedTransactionId = null;
    });
  }
}
