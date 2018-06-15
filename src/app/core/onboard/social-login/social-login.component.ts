import { Component, OnInit } from '@angular/core';
import {GoogleAuthService } from './google-auth.service';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.scss']
})
export class SocialLoginComponent implements OnInit { 
  constructor(public gAuth: GoogleAuthService) { }

  ngOnInit() {
  }
}
