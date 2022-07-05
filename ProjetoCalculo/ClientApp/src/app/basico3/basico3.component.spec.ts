import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Basico3Component } from './basico3.component';

describe('Basico3Component', () => {
  let component: Basico3Component;
  let fixture: ComponentFixture<Basico3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Basico3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Basico3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
