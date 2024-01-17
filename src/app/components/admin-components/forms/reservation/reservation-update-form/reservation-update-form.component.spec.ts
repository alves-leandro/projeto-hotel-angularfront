import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationUpdateFormComponent } from './reservation-update-form.component';

describe('ReservationUpdateFormComponent', () => {
  let component: ReservationUpdateFormComponent;
  let fixture: ComponentFixture<ReservationUpdateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationUpdateFormComponent],
    });
    fixture = TestBed.createComponent(ReservationUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
