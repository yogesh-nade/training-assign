import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementCounter } from './increment-counter';

describe('IncrementCounter', () => {
  let component: IncrementCounter;
  let fixture: ComponentFixture<IncrementCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncrementCounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncrementCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
