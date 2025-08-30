import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Fallback } from './fallback';

const routes: Routes = [{ path: '', component: Fallback }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FallbackRoutingModule { }
