import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReservationService } from 'src/app/services/reservation.service';
import { DialogComponent } from 'src/app/components/dialogs/dialog/dialog.component';
import { ReservationCreateFormComponent } from '../../../admin-components/forms/reservation/reservation-create-form/reservation-create-form.component';
import { ReservationUpdateFormComponent } from '../../../admin-components/forms/reservation/reservation-update-form/reservation-update-form.component';
import { Models } from 'src/app/shared/models';
import { ReservationDishesCreateFormComponent } from '../../forms/reservation-dishes/reservation-dishes-create-form/reservation-dishes-create-form.component';
import { ReservationSuppliesCreateFormComponent } from '../../forms/reservation-supplies/reservation-supplies-create-form/reservation-supplies-create-form.component';
import { TransactionListComponent } from '../transaction-list/transaction-list.component';
import { TransactionCreateFormComponent } from '../../forms/transaction/transaction-create-form/transaction-create-form.component';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss'],
})
export class ReservationListComponent implements OnInit {
  reservations: Models['Reservation'][] = [];
  displayedColumns: string[] = ['id', 'userId', 'roomId', 'dates', 'actions'];

  constructor(
    private reservationService: ReservationService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getAllReservations();
  }

  getAllReservations() {
    this.reservationService
      .getAllReservations()
      .subscribe((data: Models['Reservation'][]) => {
        this.reservations = data;
      });
  }

  openCreateTransactionDialog(reservationId: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        title: 'Create Transaction',
        component: TransactionCreateFormComponent,
        reservationId: reservationId,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.success) {
        this.showTransactionResultDialog(result.transactionData);
      }
    });
  }

  showTransactionResultDialog(transactionData: any) {
    const resultDialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        title: 'Transaction Result',
        transactionData: transactionData,
      },
    });

    resultDialogRef.afterClosed().subscribe(() => {
      this.getAllReservations();
    });
  }

  openCreateReservationDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        title: 'Create Reservation',
        component: ReservationCreateFormComponent,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAllReservations();
    });
  }

  openUpdateReservationDialog(reservationId: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        reservationId,
        title: 'Update Reservation',
        component: ReservationUpdateFormComponent,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAllReservations();
    });
  }

  onDeleteClick(reservationId: string) {
    this.reservationService.deleteReservation(reservationId).subscribe(() => {
      this.getAllReservations();
    });
  }

  openTransactionList() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        title: 'Transactions',
        component: TransactionListComponent,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAllReservations();
    });
  }

  openCreateDishReservationForm(reservationId: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        title: 'Create Dish Reservation',
        component: ReservationDishesCreateFormComponent,
        reservationId: reservationId,
        reservationDishData: {},
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAllReservations();
    });
  }

  openCreateSupplyReservationForm(reservationId: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        title: 'Create Supply Reservation',
        component: ReservationSuppliesCreateFormComponent,
        reservationId: reservationId,
        reservationData: {},
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getAllReservations();
    });
  }
}
