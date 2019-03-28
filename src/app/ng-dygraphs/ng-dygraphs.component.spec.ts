import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDygraphsComponent } from './ng-dygraphs.component';

describe('NgDygraphsComponent', () => {
  let component: NgDygraphsComponent;
  let fixture: ComponentFixture<NgDygraphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDygraphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDygraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
