import * as angular from 'angular';

export const bookDataName = 'bookData';

export class BookData {
  constructor() {}

  getBooks() {
    return [{name: 'Momo'}, {name: 'Harry Potter'}];
  }
}
