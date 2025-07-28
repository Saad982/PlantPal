import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CareTipsPage } from './care-tips.page';

describe('CareTipsPage', () => {
  let component: CareTipsPage;
  let fixture: ComponentFixture<CareTipsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CareTipsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
