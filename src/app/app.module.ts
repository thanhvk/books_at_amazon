import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap';
import { BookService } from './services/book.service';

import { AppComponent } from './app.component';
import { BooklistsComponent } from './components/booklists/booklists.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { CustomerReviewModalComponent } from './components/customer-review-modal/customer-review-modal.component';

const appRoutes:Routes = [
  { path: '', component: BooklistsComponent },
  { path: 'detail/:id', component: BookDetailComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BooklistsComponent,
    HeaderComponent,
    AboutComponent,
    BookDetailComponent,
    CustomerReviewModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
