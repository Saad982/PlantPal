import { NgModule } from '@angular/core';
import { AboutPage } from './about.page';
import { AboutPageRoutingModule } from './about-routing.module';

@NgModule({
  imports: [
    AboutPage,            // <-- Import the standalone AboutPage here
    AboutPageRoutingModule
  ],
  // NO declarations here
})
export class AboutPageModule {}
