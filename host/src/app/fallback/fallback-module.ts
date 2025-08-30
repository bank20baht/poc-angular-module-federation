import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FallbackRoutingModule } from './fallback-routing-module';
import { Fallback } from './fallback';


@NgModule({
  declarations: [
    Fallback
  ],
  imports: [
    CommonModule,
    FallbackRoutingModule
  ]
})
export class FallbackModule {
  
 }
