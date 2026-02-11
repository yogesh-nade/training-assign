import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleClass } from './ng-style-class';

describe('NgStyleClass', () => {
  let component: NgStyleClass;
  let fixture: ComponentFixture<NgStyleClass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgStyleClass]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgStyleClass);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
