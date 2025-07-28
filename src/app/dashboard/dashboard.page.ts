import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class DashboardPage {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigateByUrl('/home');  
  }
   goToWateringSchedule() {
    this.router.navigate(['/watering-schedule']);
  }
  goToCareTips() {
  this.router.navigate(['/care-tips']);
}
 goToPlantLibrary() {
  this.router.navigate(['/plant-library']);
}
 goToAbout() {
  this.router.navigate(['/about']);
}
goToAddedPlant() {
  this.router.navigate(['/splash']);
}
}
