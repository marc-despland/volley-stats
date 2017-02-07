/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CelluleComponent } from './cellule.component';

describe('CelluleComponent', () => {
  let component: CelluleComponent;
  let fixture: ComponentFixture<CelluleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelluleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelluleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
