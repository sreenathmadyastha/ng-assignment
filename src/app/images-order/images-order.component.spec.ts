import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesOrderComponent } from './images-order.component';

describe('ImagesOrderComponent', () => {
  let component: ImagesOrderComponent;
  let fixture: ComponentFixture<ImagesOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
