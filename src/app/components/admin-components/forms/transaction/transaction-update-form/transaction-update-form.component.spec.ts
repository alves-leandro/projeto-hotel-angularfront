import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionUpdateFormComponent } from './transaction-update-form.component';

describe('TransactionUpdateFormComponent', () => {
  let component: TransactionUpdateFormComponent;
  let fixture: ComponentFixture<TransactionUpdateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionUpdateFormComponent]
    });
    fixture = TestBed.createComponent(TransactionUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
