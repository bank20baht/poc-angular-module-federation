import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Counter } from './counter';

const routes: Routes = [{ path: '', component: Counter }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterRoutingModule { }
