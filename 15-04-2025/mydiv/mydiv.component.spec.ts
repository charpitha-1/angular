import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydivComponent } from './mydiv.component';

describe('MydivComponent', () => {
  let component: MydivComponent;
  let fixture: ComponentFixture<MydivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MydivComponent]
    });
    fixture = TestBed.createComponent(MydivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
