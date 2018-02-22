import {Component, OnInit} from '@angular/core';
import {LoaderService} from '@atrium-uw/atrium-interceptor';
import { ImpersonateComponent} from '@atrium-uw/impersonate-component';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public title = 'app';
  public userUrl = environment.userUrl;
  public loading = false;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.isLoading();
  }

  isLoading() {
    this.loaderService.loading$.subscribe(result => this.loading = result);
  }
}
