import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionUpdateFormComponent } from './promotion-update-form.component';

describe('PromotionUpdateFormComponent', () => {
  let component: PromotionUpdateFormComponent;
  let fixture: ComponentFixture<PromotionUpdateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromotionUpdateFormComponent]
    });
    fixture = TestBed.createComponent(PromotionUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
