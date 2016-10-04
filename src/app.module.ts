import * as angular from 'angular';

import {selector, config} from './app.component';

export const AppModule = angular.module(__filename, [])
  .component(selector, config)
  .name;
