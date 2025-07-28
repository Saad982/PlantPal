import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-care-tips',
  standalone: true,
  templateUrl: './care-tips.page.html',
  styleUrls: ['./care-tips.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class CareTipsPage {
  careTips = [
    {
      title: 'Watering',
      description: 'Water your plant when the soil feels dry to the touch.',
      icon: 'water'
    },
    {
      title: 'Sunlight',
      description: 'Place your plant in indirect sunlight for 4-6 hours daily.',
      icon: 'sunny'
    },
    {
      title: 'Fertilizing',
      description: 'Fertilize once a month with a balanced houseplant fertilizer.',
      icon: 'nutrition'
    },
    {
      title: 'Humidity',
      description: 'Keep humidity levels moderate, especially in dry seasons.',
      icon: 'cloud'
    },
    {
      title: 'Cleaning Leaves',
      description: 'Wipe leaves gently with a damp cloth to remove dust.',
      icon: 'leaf'
    }
  ];

  // Optional click function
  openTip(tip: any) {
    // This is just a placeholder. You can use a modal, toast, or routing.
    console.log('Clicked Tip:', tip.title);
    // Example: show toast or navigate
  }
}
