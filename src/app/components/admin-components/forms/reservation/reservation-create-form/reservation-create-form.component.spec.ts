import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationCreateFormComponent } from './reservation-create-form.component';

describe('ReservationCreateFormComponent', () => {
  let component: ReservationCreateFormComponent;
  let fixture: ComponentFixture<ReservationCreateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationCreateFormComponent],
    });
    fixture = TestBed.createComponent(ReservationCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
