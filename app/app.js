import angular from 'angular';
import angularMaterialize from 'angular-materialize';
import uiRouter from 'angular-ui-router';

import CatalogCtrl from './catalog/catalog.controller';
import CatalogService from './catalog/catalog.service';

import CartCtrl from './cart/cart.controller';
import CartService from './cart/cart.service';

import LoginCtrl from './login/login.controller';
import LoginService from './login/login.service';

import SignupCtrl from './signup/signup.controller';
import SignupService from './signup/signup.service';

import CheckoutCtrl from './checkout/checkout.controller';
import CheckoutService from './checkout/checkout.service';

angular.module('my-app', [angularMaterialize, uiRouter])
  .service('checkoutService', CheckoutService)
  .service('loginService', LoginService)
  .service('signupService', SignupService)
  .service('catalogService', CatalogService)
  .service('cartService', CartService)
  .controller('CheckoutCtrl', CheckoutCtrl)
  .controller('SignupCtrl', SignupCtrl)
  .controller('LoginCtrl', LoginCtrl)
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
