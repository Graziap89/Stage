import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hc2Component } from './hc2.component';

describe('Hc2Component', () => {
  let component: Hc2Component;
  let fixture: ComponentFixture<Hc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
