import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WateringSchedulePage } from './watering-schedule.page';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: WateringSchedulePage, // Use the standalone component here
      },
    ]),
    WateringSchedulePage, // ✅ Import the standalone component here
  ],
  // ❌ No declarations
})
export class WateringSchedulePageModule {}
