import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Output() formSelected = new EventEmitter<string>();

  userName: '' | undefined;
  userEmail: '' | undefined;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.initializeUserData();
  }

  initializeUserData() {
    const userDetails = this.authService.getUserDetails();

    this.userName = userDetails.name || '';
    this.userEmail = userDetails.email || '';
  }

  selectForm(formName: string) {
    this.formSelected.emit(formName);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
