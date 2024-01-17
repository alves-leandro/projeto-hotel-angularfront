import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCreateFormComponent } from './room-create-form.component';

describe('RoomCreateFormComponent', () => {
  let component: RoomCreateFormComponent;
  let fixture: ComponentFixture<RoomCreateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomCreateFormComponent]
    });
    fixture = TestBed.createComponent(RoomCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
