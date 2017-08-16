import { Component, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-customer-review-modal',
  templateUrl: './customer-review-modal.component.html',
  styleUrls: ['./customer-review-modal.component.css']
})
export class CustomerReviewModalComponent {
  @Input() bookId: number;
  @Output() addReviewSuccessEvent: EventEmitter<string> = new EventEmitter<string>();
  title: string;
  modalRef: BsModalRef;  
  review;

  constructor(
    private modalService: BsModalService,
    private bookService: BookService  
    ) {
    this.title = 'Customer review';
    this.review = {
      customer: '',
      content: '',
      date: new Date()
    }
  }
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  addCustomerReview() {
    this.bookService.addCustomerReview(this.bookId, this.review);
    this.addReviewSuccessEvent.emit('add review event success');
    this.modalRef.hide();
    return false;
  }
}

