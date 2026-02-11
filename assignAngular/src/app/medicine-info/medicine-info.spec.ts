import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineInfo } from './medicine-info';

describe('MedicineInfo', () => {
  let component: MedicineInfo;
  let fixture: ComponentFixture<MedicineInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicineInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicineInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
