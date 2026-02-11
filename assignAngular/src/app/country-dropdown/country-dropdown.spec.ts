import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDropdown } from './country-dropdown';

describe('CountryDropdown', () => {
  let component: CountryDropdown;
  let fixture: ComponentFixture<CountryDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryDropdown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryDropdown);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
