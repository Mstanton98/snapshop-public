import angular from 'angular';
import angularMaterialize from 'angular-materialize';
import uiRouter from 'angular-ui-router';

import CatalogCtrl from './catalog/catalog.controller';
import CatalogService from './catalog/catalog.service';

import CartCtrl from './cart/cart.controller';
import CartService from './cart/cart.service';

angular.module('my-app', [angularMaterialize, uiRouter])
  .service('catalogService', CatalogService)
  .service('cartService', CartService)
  .controller('CatalogCtrl', CatalogCtrl)
  .controller('CartCtrl', CartCtrl)
  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider
      .state('index', {
        url: '',
        templateUrl: 'views/catalog.html'
      })
      .state('checkout', {
        url: '/checkout',
        templateUrl: 'views/checkout.html'
      })
      .state('orders', {
        url: '/orders',
        templateUrl: 'views/orders.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html'
      });
  }]);
