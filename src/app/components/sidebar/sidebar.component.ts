import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  profile:any;
  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile(){
    this.profile = this.auth.userProfile;
  }

}
