class CheckoutService {
  constructor($http) {
    this.$http = $http;
    this.order = {};
  }
}

CheckoutService.$inject = ['$http'];

export default CheckoutService;
