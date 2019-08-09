/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RepositComponent } from './reposit.component';

describe('RepositComponent', () => {
  let component: RepositComponent;
  let fixture: ComponentFixture<RepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
