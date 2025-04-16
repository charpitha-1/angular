import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorlistingComponent } from './visitorlisting.component';

describe('VisitorlistingComponent', () => {
  let component: VisitorlistingComponent;
  let fixture: ComponentFixture<VisitorlistingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitorlistingComponent]
    });
    fixture = TestBed.createComponent(VisitorlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
