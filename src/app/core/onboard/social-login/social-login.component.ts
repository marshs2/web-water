import { UserProfileService } from './../../../shared/user-profile.service';
import { Component, OnInit } from '@angular/core';
import {GoogleAuthService } from './google-auth.service';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.scss']
})
export class SocialLoginComponent implements OnInit {
  constructor(public gAuth: GoogleAuthService,
              public userProfileService: UserProfileService) { }

  ngOnInit() {
    this.gAuth.googleInit();
    this.gAuth.getGooglePromise().then((data) => {
      this.userProfileService.googleUserDetails(data);
    }, (error) => {
      console.log('P', error);
    });
  }

  googleAuth() {
    const profile = this.gAuth.attachSignin(document.getElementById('googleBtn'));
    console.log('My Profile', profile);
  }
}
