import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminRoomCardComponent } from './components/admin-components/cards/admin-room-card/admin-room-card.component';
import { EmployeeCreateFormComponent } from './components/admin-components/forms/employee/employee-create-form/employee-create-form.component';
import { EmployeeUpdateFormComponent } from './components/admin-components/forms/employee/employee-update-form/employee-update-form.component';
import { KitchenDishesCreateFormComponent } from './components/admin-components/forms/kitchen-dishes/kitchen-dishes-create-form/kitchen-dishes-create-form.component';
import { KitchenDishesUpdateFormComponent } from './components/admin-components/forms/kitchen-dishes/kitchen-dishes-update-form/kitchen-dishes-update-form.component';
import { PromotionCreateFormComponent } from './components/admin-components/forms/promotion/promotion-create-form/promotion-create-form.component';
import { PromotionUpdateFormComponent } from './components/admin-components/forms/promotion/promotion-update-form/promotion-update-form.component';
import { ReservationDishesCreateFormComponent } from './components/admin-components/forms/reservation-dishes/reservation-dishes-create-form/reservation-dishes-create-form.component';
import { ReservationDishesUpdateFormComponent } from './components/admin-components/forms/reservation-dishes/reservation-dishes-update-form/reservation-dishes-update-form.component';
import { ReservationSuppliesCreateFormComponent } from './components/admin-components/forms/reservation-supplies/reservation-supplies-create-form/reservation-supplies-create-form.component';
import { ReservationSuppliesUpdateFormComponent } from './components/admin-components/forms/reservation-supplies/reservation-supplies-update-form/reservation-supplies-update-form.component';
import { ReservationCreateFormComponent } from './components/admin-components/forms/reservation/reservation-create-form/reservation-create-form.component';
import { ReservationUpdateFormComponent } from './components/admin-components/forms/reservation/reservation-update-form/reservation-update-form.component';
import { RoomCreateFormComponent } from './components/admin-components/forms/room/room-create-form/room-create-form.component';
import { RoomUpdateFormComponent } from './components/admin-components/forms/room/room-update-form/room-update-form.component';
import { SuppliesCreateFormComponent } from './components/admin-components/forms/supplies/supplies-create-form/supplies-create-form.component';
import { SuppliesUpdateFormComponent } from './components/admin-components/forms/supplies/supplies-update-form/supplies-update-form.component';
import { TransactionCreateFormComponent } from './components/admin-components/forms/transaction/transaction-create-form/transaction-create-form.component';
import { TransactionUpdateFormComponent } from './components/admin-components/forms/transaction/transaction-update-form/transaction-update-form.component';
import { UserCreateFormComponent } from './components/admin-components/forms/user/user-create-form/user-create-form.component';
import { UserUpdateFormComponent } from './components/admin-components/forms/user/user-update-form/user-update-form.component';
import { EmployeeListComponent } from './components/admin-components/lists/employee-list/employee-list.component';
import { KitchenDishesListComponent } from './components/admin-components/lists/kitchen-dishes-list/kitchen-dishes-list.component';
import { PromotionListComponent } from './components/admin-components/lists/promotion-list/promotion-list.component';
import { ReservationListComponent } from './components/admin-components/lists/reservation-list/reservation-list.component';
import { RoomListComponent } from './components/admin-components/lists/room-list/room-list.component';
import { SuppliesListComponent } from './components/admin-components/lists/supplies-list/supplies-list.component';
import { TransactionListComponent } from './components/admin-components/lists/transaction-list/transaction-list.component';
import { UserListComponent } from './components/admin-components/lists/user-list/user-list.component';
import { SidebarComponent } from './components/admin-components/sidebar/sidebar.component';
import { BookingRoomCardComponent } from './components/booking-components/cards/booking-room-card/booking-room-card.component';
import { BookingFormComponent } from './components/booking-components/forms/booking-form/booking-form.component';
import { RoomBookingListComponent } from './components/booking-components/list/room-booking-list/room-booking-list.component';
import { DialogComponent } from './components/dialogs/dialog/dialog.component';
import { RoomBookingDialogComponent } from './components/dialogs/room-booking-dialog/room-booking-dialog.component';
import { RoomEditDialogComponent } from './components/dialogs/room-edit-dialog/room-edit-dialog.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { httpInterceptorsProviders } from './http-interceptors';
import { MaterialModule } from './material.module';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { AccommodationComponent } from './pages/accommodation/accommodation.component';

@NgModule({
  declarations: [
    LoginComponent,
    AdminRoomCardComponent,
    RoomEditDialogComponent,
    RoomBookingListComponent,
    RoomBookingDialogComponent,
    NavbarComponent,
    AppComponent,
    HomeComponent,
    HotelComponent,
    BookingFormComponent,
    BookingRoomCardComponent,
    AdminComponent,
    SidebarComponent,
    RoomCreateFormComponent,
    RoomListComponent,
    RoomUpdateFormComponent,
    DialogComponent,
    UserListComponent,
    UserCreateFormComponent,
    UserUpdateFormComponent,
    EmployeeListComponent,
    EmployeeCreateFormComponent,
    EmployeeUpdateFormComponent,
    PromotionListComponent,
    PromotionCreateFormComponent,
    PromotionUpdateFormComponent,
    TransactionListComponent,
    TransactionCreateFormComponent,
    TransactionUpdateFormComponent,
    ReservationListComponent,
    ReservationCreateFormComponent,
    ReservationUpdateFormComponent,
    KitchenDishesListComponent,
    SuppliesListComponent,
    KitchenDishesCreateFormComponent,
    KitchenDishesUpdateFormComponent,
    SuppliesCreateFormComponent,
    SuppliesUpdateFormComponent,
    ReservationDishesCreateFormComponent,
    ReservationDishesUpdateFormComponent,
    ReservationSuppliesUpdateFormComponent,
    ReservationSuppliesCreateFormComponent,
    AboutComponent,
    AccommodationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [httpInterceptorsProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
