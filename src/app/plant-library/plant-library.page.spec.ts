import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantLibraryPage } from './plant-library.page';

describe('PlantLibraryPage', () => {
  let component: PlantLibraryPage;
  let fixture: ComponentFixture<PlantLibraryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantLibraryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
