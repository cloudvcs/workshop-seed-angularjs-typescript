import * as angular from 'angular';

import * as appComponent from './app.component';
import * as bookListComponent from './book-list/book-list.component';
import { BookData, bookDataName } from './shared/book-data.service';

export const AppModule = angular.module(__filename, [])
  .component(appComponent.selector, appComponent.config)
  .component(bookListComponent.selector, bookListComponent.config)
  .service(bookDataName, BookData)
  .name;
