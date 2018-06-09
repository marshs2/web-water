import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss']
})
export class OnboardComponent implements OnInit {

  private opened = true;
  private _modeNum = 0;
  private _positionNum = 1;

  private _MODES: Array<string> = ['over', 'push', 'slide'];
  private _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];

  private toggleOpen(): void {
    this.opened = !this.opened;
  }

  constructor() { }

  ngOnInit() {
  }

}
