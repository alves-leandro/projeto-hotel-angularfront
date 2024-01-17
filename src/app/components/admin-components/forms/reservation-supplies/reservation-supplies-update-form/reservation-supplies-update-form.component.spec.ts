import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationSuppliesUpdateFormComponent } from './reservation-supplies-update-form.component';

describe('ReservationSuppliesUpdateFormComponent', () => {
  let component: ReservationSuppliesUpdateFormComponent;
  let fixture: ComponentFixture<ReservationSuppliesUpdateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationSuppliesUpdateFormComponent]
    });
    fixture = TestBed.createComponent(ReservationSuppliesUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
