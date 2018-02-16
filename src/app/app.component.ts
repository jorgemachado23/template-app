import {AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, OnChanges, OnInit} from '@angular/core';
import {LoaderService} from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit, OnChanges {

  public title = 'app';
  public loading = false;

  constructor(private changeDetector: ChangeDetectorRef, private loaderService: LoaderService, ) {}

  ngOnInit() {
    this.isLoading();
  }

  ngAfterViewInit() {
    this.changeDetector.detectChanges();

  }

  ngAfterContentInit() {}

  ngOnChanges() {

  }

  isLoading() {
    this.loaderService.loading$.subscribe(result => this.loading = result);
  }
}
