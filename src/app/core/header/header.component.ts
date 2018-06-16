import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserProfileService } from '../../shared/user-profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() loginSignupClick = new EventEmitter<boolean>();
  constructor(public userProfile: UserProfileService) { }

  ngOnInit() {
  }

  loginSignUpClicked(){
    this.loginSignupClick.emit(true);
  }

}
