import { Injectable } from '@angular/core';
import { UserProfileService } from '../../../shared/user-profile.service';
declare var gapi: any;

@Injectable()
export class GoogleAuthService {
  public auth2: any;
  public googleProfile: any;
  
  public googleInit() {
     gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '654751209462-hvcjq502b150dg09hrp3qev04vud4qqn.apps.googleusercontent.com',
        'cookie_policy': 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }
  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {

        let profile = googleUser.getBasicProfile();
        // console.log('Token || ' + googleUser.getAuthResponse().id_token);
        // console.log('ID: ' + profile.getId());
        // console.log('Name: ' + profile.getName());
        // console.log('Image URL: ' + profile.getImageUrl());
        // console.log('Email: ' + profile.getEmail());
        //YOUR CODE HERE
        // this.googleProfile = profile;
        this.sendProfile(profile);
      }, (error) => {
        console.log(JSON.stringify(error, undefined, 2));
      });
  }

  constructor(public userProfileService: UserProfileService) { 
    this.googleInit();
  }

  sendProfile(profile){
    // console.log("Sending Profile to user profile service", profile);
    this.userProfileService.googleUserDetails(profile);
  }

}
