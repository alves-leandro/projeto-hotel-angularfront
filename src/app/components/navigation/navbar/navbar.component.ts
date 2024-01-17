import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  isShown = false;

  menuIcon = 'menu';

  toggleShow = (): void => {
    this.isShown = !this.isShown;

    if (this.isShown) this.menuIcon = 'close';
    if (!this.isShown) this.menuIcon = 'menu';
  };

  scroll = (): void => {
    const scrollHeigth = 100;

    if (window.scrollY >= scrollHeigth) {
      document.body.style.setProperty('--navbg', 'white');
    } else if (window.scrollY < scrollHeigth) {
      document.body.style.setProperty('--navbg', 'transparent');
    }
  };

  hasToken(): boolean {
    return !!this.authService.getAuthotizationToken();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
