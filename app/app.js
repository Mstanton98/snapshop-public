import angular from 'angular';
import angularMaterialize from 'angular-materialize';

import CatalogCtrl from './catalog/catalog.controller';

import CartCtrl from './cart/cart.controller';
import CartService from './cart/cart.service';

angular.module('my-app', [angularMaterialize])
  .service('cartService', CartService)
  .controller('CatalogCtrl', CatalogCtrl)
  .controller('CartCtrl', CartCtrl);

$(".dropdown-button").dropdown();

$('.modal-trigger').leanModal({
    dismissible: true,
    in_duration: 300,
    out_duration: 200
  });
