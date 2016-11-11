class CheckoutCtrl {
  constructor() {
    this.address1 = '';
    this.address2 = '';
    this.city = '';
    this.state = '';
    this.zipcode = '';
  }

  submitOrder() {

  }
}

CheckoutCtrl.$inject = ['checkoutService'];

export default CheckoutCtrl;
