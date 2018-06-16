import { Injectable } from '@angular/core';

@Injectable()
export class UserProfileService {
  public userProfile: Object;

  constructor() {
   }

  googleUserDetails(profile){
    this.userProfile = {
      email_id : profile.getEmail(),
      name: profile.getName(),
      image: profile.getImageUrl()
    };
    
    console.log("Got google user", this.userProfile);
  }


}
