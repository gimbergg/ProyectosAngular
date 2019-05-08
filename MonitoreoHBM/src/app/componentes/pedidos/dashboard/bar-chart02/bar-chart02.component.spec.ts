import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChart02Component } from './bar-chart02.component';

describe('BarChart02Component', () => {
  let component: BarChart02Component;
  let fixture: ComponentFixture<BarChart02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChart02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChart02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
