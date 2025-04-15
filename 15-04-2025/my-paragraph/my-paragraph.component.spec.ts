import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyParagraphComponent } from './my-paragraph.component';

describe('MyParagraphComponent', () => {
  let component: MyParagraphComponent;
  let fixture: ComponentFixture<MyParagraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyParagraphComponent]
    });
    fixture = TestBed.createComponent(MyParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
