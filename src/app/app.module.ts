import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GridModule} from '@progress/kendo-angular-grid';
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from '../app-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {ProductService} from './services/product.service';
import {FormsModule} from '@angular/forms';
import {DateInputsModule} from '@progress/kendo-angular-dateinputs';
import {DropDownsModule} from '@progress/kendo-angular-dropdowns';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule} from '@progress/kendo-angular-dialog';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {InterceptorService} from './services/interceptor.service';
import {LoaderService} from './services/loader.service';
import {MatProgressBarModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent
  ],
  imports: [
    MatProgressBarModule,
    FormsModule,
    BrowserModule,
    GridModule,
    AppRoutingModule,
    DateInputsModule,
    DropDownsModule,
    BrowserAnimationsModule,
    DialogModule,
    HttpClientModule
  ],
  providers: [
    LoaderService,
    ProductService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
