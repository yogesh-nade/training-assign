import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddupdateComponent } from './addupdate-component';

describe('AddupdateComponent', () => {
  let component: AddupdateComponent;
  let fixture: ComponentFixture<AddupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddupdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddupdateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
