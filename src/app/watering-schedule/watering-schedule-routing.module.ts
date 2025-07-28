import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WateringSchedulePage } from './watering-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: WateringSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WateringSchedulePageRoutingModule {}
