import {Component, OnInit} from '@angular/core';
import {LoaderService} from '@atrium-uw/atrium-interceptor';
import {environment} from '../environments/environment';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'app';
  public userUrl = environment.userUrl;
  public loading = false;

  constructor(private loaderService: LoaderService, public auth: AuthService) {}

  ngOnInit() {
    this.auth.handleAuthentication();
    this.isLoading();
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.auth.renewTokens();
    }
  }

  isLoading() {
    this.loaderService.loading$.subscribe(result => this.loading = result);
  }
}
