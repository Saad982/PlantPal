import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';  // Import IonicModule here
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,   // <--- Make this standalone!
  imports: [IonicModule, CommonModule, FormsModule]  // <--- Import needed modules here
})
export class AboutPage {}
