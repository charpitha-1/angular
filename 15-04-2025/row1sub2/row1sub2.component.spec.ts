import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Row1sub2Component } from './row1sub2.component';

describe('Row1sub2Component', () => {
  let component: Row1sub2Component;
  let fixture: ComponentFixture<Row1sub2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Row1sub2Component]
    });
    fixture = TestBed.createComponent(Row1sub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
