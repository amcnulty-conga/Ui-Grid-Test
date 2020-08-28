import angular from 'angular';
import myGridComponent from './myGrid.component';

const myGridModule = angular.module('myGrid', [])
  .component('myGrid', myGridComponent);
export default myGridModule;