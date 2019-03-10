import { Component, OnInit } from '@angular/core';
import { template } from './template';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataModel;
  profile;
  
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.profile = this.auth.userProfile;
    console.log(this.profile)
  }

}
