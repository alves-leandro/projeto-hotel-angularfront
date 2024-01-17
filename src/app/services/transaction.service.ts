import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Models } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private apiService: ApiService) {}

  getAllTransactions(): Observable<Models['Transaction'][]> {
    return this.apiService.get('transactions');
  }

  getTransactionById(transactionId: string): Observable<Models['Transaction']> {
    return this.apiService.get(`transactions/${transactionId}`);
  }

  createTransaction(transactionData: any): Observable<Models['Transaction']> {
    return this.apiService.post('transactions', transactionData);
  }

  updateTransaction(
    transactionId: string,
    transactionData: any,
  ): Observable<Models['Transaction']> {
    return this.apiService.patch(
      `transactions/${transactionId}`,
      transactionData,
    );
  }

  deleteTransaction(transactionId: string): Observable<any> {
    return this.apiService.delete(`transactions/${transactionId}`);
  }
}
