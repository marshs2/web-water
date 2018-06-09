import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardModule } from "./onboard/onboard.module";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    OnboardModule
  ]
})
export class CoreModule { }
