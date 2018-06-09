import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLoginComponent } from './social-login/social-login.component';
import { OnboardComponent } from './onboard.component';

import { SidebarModule } from 'ng-sidebar';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule.forRoot()
  ],
  declarations: [SocialLoginComponent, OnboardComponent]
})
export class OnboardModule { }
