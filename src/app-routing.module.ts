import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './app/components/home/home.component';
import { CallbackComponent } from './app/components/callback/callback.component';
import { CanActivateUserService } from './app/services/can-activate-user.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [CanActivateUserService] },
  { path: 'callback', component: CallbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
