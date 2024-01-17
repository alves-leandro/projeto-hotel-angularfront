import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { AboutComponent } from './pages/about/about.component';
import { AccommodationComponent } from './pages/accommodation/accommodation.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'about', component: AboutComponent },
  { path: 'accommodation', component: AccommodationComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
