import template from './myGrid.component.html';
import controller from './myGrid.controller.js';
import './myGrid.component.scss';

let myGridComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};
export default myGridComponent;