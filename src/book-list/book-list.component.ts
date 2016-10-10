import * as angular from 'angular';

export const selector = 'bookList';
// <book-list></book-list>

class BookListComponent implements angular.IController {
  books = [{name: 'Momo'}, {name: 'Harry Potter'}];
}

export const config: angular.IComponentOptions = {
  controller: BookListComponent,
  templateUrl: 'src/book-list/book-list.component.html'
};
