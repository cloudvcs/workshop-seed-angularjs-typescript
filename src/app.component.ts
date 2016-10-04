import * as angular from 'angular';

export const selector = 'appRoot';

class AppComponent implements angular.IController {
  title = 'app works';
}

const template = `
<h1>{{$ctrl.title}}</h1>
`;

export const config: angular.IComponentOptions = {
  controller: AppComponent,
  template
};
