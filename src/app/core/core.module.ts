import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardModule } from "./onboard/onboard.module";
import { HeaderModule } from './header/header.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [],
  exports: [
    OnboardModule,
    HeaderModule
  ]
})
export class CoreModule { }
