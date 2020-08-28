// Import styles
import 'bootstrap-css-only';
import 'normalize.css';
import 'angular-ui-grid/css/ui-grid.core.min.css';

import angular from 'angular';
import appComponent from './app.component';
import ComponentsModule from './components/components';
import AngularUiGrid from 'angular-ui-grid';

angular.module('app', [
  ComponentsModule.name,
  AngularUiGrid
]).component('app', appComponent);