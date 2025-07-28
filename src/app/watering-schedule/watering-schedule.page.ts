import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-watering-schedule',
  standalone: true,
  templateUrl: './watering-schedule.page.html',
  styleUrls: ['./watering-schedule.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class WateringSchedulePage {}
