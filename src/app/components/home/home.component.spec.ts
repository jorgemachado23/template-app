import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {GridModule} from '@progress/kendo-angular-grid';
import {ProductService} from '../../services/product.service';
import {DateInputsModule} from '@progress/kendo-angular-dateinputs';
import {DropDownsModule} from '@progress/kendo-angular-dropdowns';
import {FormsModule} from '@angular/forms';
import {DialogModule, DialogService} from '@progress/kendo-angular-dialog';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {By} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ FormsModule, GridModule, DateInputsModule, DropDownsModule, DialogModule, HttpClientTestingModule, NoopAnimationsModule],
      providers: [ ProductService, DialogService, HttpTestingController]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));

  it('should render kendo grid', async(() => {
    const app = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(app.gridData.length).toEqual(77);
    expect(compiled.querySelector('kendo-grid')).not.toBeNull();
  }));

  it('Should render a dialog', async( () => {
    const app = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    const btnModal = fixture.debugElement.query(By.css('#btn-modal'));
    btnModal.triggerEventHandler('click', null);
    fixture.detectChanges();
    const kendoModal = fixture.debugElement.query(By.css('kendo-dialog'));
    expect(kendoModal).toBeTruthy();
  }));

});
