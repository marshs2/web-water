import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLoginComponent } from './social-login/social-login.component';
import { OnboardComponent } from './onboard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SocialLoginComponent, OnboardComponent]
})
export class OnboardModule { }
