import * as angular from 'angular';

export const bookDataName = 'bookData';

export class BookData {
  constructor(private http: angular.IHttpService) {}

  getBooks() {
    return [{name: 'Momo'}, {name: 'Harry Potter'}];
  }
}
