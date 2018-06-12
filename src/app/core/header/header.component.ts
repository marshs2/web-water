import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() loginSignupClick = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  loginSignUpClicked(){
    this.loginSignupClick.emit(true);
  }

}
