import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing-module';
import { Counter } from './counter';


@NgModule({
  declarations: [
    Counter
  ],
  imports: [
    CommonModule,
    CounterRoutingModule
  ]
})
export class CounterModule { }
