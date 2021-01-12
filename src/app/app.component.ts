import { Component } from '@angular/core';
import { AuthenticationService } from '../app/login/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular8-StudentApp';
  isLoggedIn = false;

  constructor(
    private authenticationService: AuthenticationService) {}

    ngOnInit() {
      this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    }

    handleLogout() {
      this.authenticationService.logout();
    }
}
