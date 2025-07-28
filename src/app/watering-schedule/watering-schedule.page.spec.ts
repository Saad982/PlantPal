import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WateringSchedulePage } from './watering-schedule.page';

describe('WateringSchedulePage', () => {
  let component: WateringSchedulePage;
  let fixture: ComponentFixture<WateringSchedulePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WateringSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
