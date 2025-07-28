import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CareTipsPageRoutingModule } from './care-tips-routing.module';

import { CareTipsPage } from './care-tips.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CareTipsPageRoutingModule
  ],

})
export class CareTipsPageModule {}
