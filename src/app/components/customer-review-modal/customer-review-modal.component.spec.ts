import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReviewModalComponent } from './customer-review-modal.component';

describe('CustomerReviewModalComponent', () => {
  let component: CustomerReviewModalComponent;
  let fixture: ComponentFixture<CustomerReviewModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerReviewModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
