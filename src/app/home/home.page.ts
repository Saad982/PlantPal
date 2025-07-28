import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class HomePage {
  plantName: string = '';
  photo: string = '';
  plants: any[] = [];

  constructor() {
    this.loadStoredPlants();
  }

  async loadStoredPlants() {
    const stored = await Preferences.get({ key: 'plants' });
    this.plants = stored.value ? JSON.parse(stored.value) : [];
  }

  async takePhoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 70,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera
      });
      this.photo = image.dataUrl!;
    } catch (error) {
      console.log('Camera error:', error);
    }
  }

  async addPlant() {
    if (!this.plantName.trim()) return;

    let location;
    try {
      const position = await Geolocation.getCurrentPosition();
      location = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    } catch (error) {
      console.log('Location error:', error);
      location = null;
    }

    const newPlant = {
      id: Date.now(),
      name: this.plantName.trim(),
      photo: this.photo || '',
      location: location
    };

    this.plants.push(newPlant);
    await Preferences.set({ key: 'plants', value: JSON.stringify(this.plants) });

    // Clear form
    this.plantName = '';
    this.photo = '';
  }
}
