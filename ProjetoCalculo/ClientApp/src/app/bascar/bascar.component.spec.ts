import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BascarComponent } from './bascar.component';

describe('BascarComponent', () => {
  let component: BascarComponent;
  let fixture: ComponentFixture<BascarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BascarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BascarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
