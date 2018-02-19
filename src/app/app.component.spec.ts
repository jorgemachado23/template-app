import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {MatProgressBarModule} from '@angular/material';
import {LoaderService} from './services/loader.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SidebarComponent
      ],
      imports: [
        RouterTestingModule,
        MatProgressBarModule
      ],
      providers: [
        LoaderService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should verify that called isLoading method has been called', async ( () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    spyOn(app, 'isLoading');
    expect(app.loading).toBeFalsy();
    fixture.detectChanges();
    expect(app.isLoading).toHaveBeenCalled();
  }));
});
