import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RastaurantListComponent } from './rastaurant-list.component';

describe('RastaurantListComponent', () => {
  let component: RastaurantListComponent;
  let fixture: ComponentFixture<RastaurantListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RastaurantListComponent]
    });
    fixture = TestBed.createComponent(RastaurantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
