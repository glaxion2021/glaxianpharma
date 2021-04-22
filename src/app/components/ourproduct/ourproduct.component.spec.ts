/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OurproductComponent } from './ourproduct.component';

describe('OurproductComponent', () => {
  let component: OurproductComponent;
  let fixture: ComponentFixture<OurproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
