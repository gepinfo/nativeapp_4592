import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Createfeature2Component } from './createfeature2.component';

describe('Createfeature2Component', () => {
  let component: Createfeature2Component;
  let fixture: ComponentFixture<Createfeature2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Createfeature2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Createfeature2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});