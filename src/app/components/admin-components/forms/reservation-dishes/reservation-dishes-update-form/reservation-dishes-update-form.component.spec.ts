import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationDishesUpdateFormComponent } from './reservation-dishes-update-form.component';

describe('ReservationDishesUpdateFormComponent', () => {
  let component: ReservationDishesUpdateFormComponent;
  let fixture: ComponentFixture<ReservationDishesUpdateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationDishesUpdateFormComponent]
    });
    fixture = TestBed.createComponent(ReservationDishesUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
