import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import plantsData from '../../../assets/plants.json';

interface Plant {

  name: string;
  scientific: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-plant-library',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './plant-library.page.html',
  styleUrls: ['./plant-library.page.scss']
})
export class PlantLibraryPage {
  plants: Plant[] = plantsData;
  searchTerm = '';

  filteredPlants(): Plant[] {
    return this.plants.filter(plant =>
      plant.name.toLowerCase().includes(this.searchTerm.trim().toLowerCase())
    );
  }

  openPlant(plant: Plant): void {
    console.log('Clicked plant:', plant.name);
  }
}
