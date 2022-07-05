import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LitarCalculosComponent } from './litar-calculos.component';

describe('LitarCalculosComponent', () => {
  let component: LitarCalculosComponent;
  let fixture: ComponentFixture<LitarCalculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LitarCalculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LitarCalculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
