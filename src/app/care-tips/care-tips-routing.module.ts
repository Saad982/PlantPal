import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CareTipsPage } from './care-tips.page';

const routes: Routes = [
  {
    path: '',
    component: CareTipsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CareTipsPageRoutingModule {}
