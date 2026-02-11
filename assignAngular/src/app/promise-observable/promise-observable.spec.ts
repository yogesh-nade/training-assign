import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseObservable } from './promise-observable';

describe('PromiseObservable', () => {
  let component: PromiseObservable;
  let fixture: ComponentFixture<PromiseObservable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromiseObservable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromiseObservable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
