import * as angular from 'angular';
import { BookData } from '../shared/book-data.service';

export const selector = 'bookList';
// <book-list></book-list>

class BookListComponent implements angular.IController {
  books;

  constructor(bookData: BookData) {
    this.books = bookData.getBooks();
  }
}

export const config: angular.IComponentOptions = {
  controller: BookListComponent,
  templateUrl: 'src/book-list/book-list.component.html'
};
