import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baisco2Component } from './baisco2.component';

describe('Baisco2Component', () => {
  let component: Baisco2Component;
  let fixture: ComponentFixture<Baisco2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baisco2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baisco2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
