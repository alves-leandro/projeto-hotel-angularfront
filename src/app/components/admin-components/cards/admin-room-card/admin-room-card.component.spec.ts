import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomCardComponent } from './admin-room-card.component';

describe('AdminRoomCardComponent', () => {
  let component: AdminRoomCardComponent;
  let fixture: ComponentFixture<AdminRoomCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminRoomCardComponent],
    });
    fixture = TestBed.createComponent(AdminRoomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
