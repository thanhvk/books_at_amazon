import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-booklists',
  templateUrl: './booklists.component.html',
  styleUrls: ['./booklists.component.css']
})
export class BooklistsComponent implements OnInit {
  bookLists;
  constructor(private bookService:BookService) { }

  ngOnInit() {    
    this.bookLists = this.bookService.getBookLists();
  }

}
