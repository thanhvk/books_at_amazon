import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book;

  constructor(
    private route:ActivatedRoute,
    private bookService:BookService,
  ) { }

  ngOnInit() {
    this.getBook();    
  }

  handleAddReviewSuccess(event) {
    console.log(event);
    this.getBook();
  }

  getBook() {
    this.route.params.subscribe(params => {
      let bookId = parseInt(params.id);
      this.book = this.bookService.getBook(bookId);
    });
  };

}
