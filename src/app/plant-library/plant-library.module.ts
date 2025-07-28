import { NgModule } from '@angular/core';
import { PlantLibraryPage } from './plant-library.page';
import { PlantLibraryPageRoutingModule } from './plant-library-routing.module';

@NgModule({
  imports: [
    PlantLibraryPageRoutingModule,
    PlantLibraryPage  // ✅ Because it's standalone
  ]
})
export class PlantLibraryPageModule {}
