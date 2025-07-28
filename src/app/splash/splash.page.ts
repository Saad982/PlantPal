import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Preferences } from '@capacitor/preferences';
import * as L from 'leaflet';  // Import leaflet for map functionality

@Component({
  selector: 'app-splash',
  standalone: true,
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule]  // Needed for ion-* tags
})
export class SplashPage {

  plants: { name: string, photo: string, location: { lat: number, lng: number } }[] = [];
  map: any;

  constructor() { }

  // Load plants from local storage
  async loadPlants() {
    const { value } = await Preferences.get({ key: 'plants' });

    if (value) {
      this.plants = JSON.parse(value);
    }
  }

  // Display plant location on the map
  loadMap(lat: number, lng: number) {
    if (this.map) {
      this.map.remove();  // Remove any old map
    }

    this.map = L.map('map').setView([lat, lng], 13);  // Initialize the map with the plant's location

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors',
    }).addTo(this.map);

    L.marker([lat, lng]).addTo(this.map)  // Add marker for the plant
      .bindPopup('Plant Location')
      .openPopup();
  }

  // When a plant is clicked, show the plant's location on the map
  showPlantLocation(plant: { name: string, photo: string, location: { lat: number, lng: number } }) {
    if (plant.location) {
      this.loadMap(plant.location.lat, plant.location.lng);
    }
  }

  ngOnInit() {
    this.loadPlants();  // Load the plants when the page initializes
  }
}
