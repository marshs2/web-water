import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLoginComponent } from './social-login/social-login.component';
import { OnboardComponent } from './onboard.component';

import { SidebarModule } from 'ng-sidebar';
import { GoogleAuthService } from './social-login/google-auth.service';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule.forRoot()
  ],
  declarations: [SocialLoginComponent, OnboardComponent],
  providers : [GoogleAuthService]
})
export class OnboardModule { }
