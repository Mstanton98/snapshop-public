class CheckoutService {
  constructor($http) {
    this.$http = $http;
    this.order = {};
  }

  placeOrder() {
    return this.$http.post('/orders', this.order)
      .then(() => {
        return Materialize.toast('Your order has been placed, thank you!', 10000);
      })
      .catch((err) => {
        console.error(err);
        return Materialize.toast('Oops, something went wrong. Try again.');
      })
  }
}

CheckoutService.$inject = ['$http'];

export default CheckoutService;
