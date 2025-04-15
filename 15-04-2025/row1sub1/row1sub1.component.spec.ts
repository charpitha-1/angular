import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Row1sub1Component } from './row1sub1.component';

describe('Row1sub1Component', () => {
  let component: Row1sub1Component;
  let fixture: ComponentFixture<Row1sub1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Row1sub1Component]
    });
    fixture = TestBed.createComponent(Row1sub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
