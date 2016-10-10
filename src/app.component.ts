import * as angular from 'angular';

export const selector = 'appRoot';

class AppComponent implements angular.IController {
  title = 'Hallo Berlin! Hier gibt\'s tolles Internet!';
}

const template = `
<h1>{{$ctrl.title}}</h1>
<book-list></book-list>
`;

export const config: angular.IComponentOptions = {
  controller: AppComponent,
  template
};
