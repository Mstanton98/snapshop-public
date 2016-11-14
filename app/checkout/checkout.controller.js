class CheckoutCtrl {
  constructor(checkoutSvc, cartSvc) {
    this.checkoutSvc = checkoutSvc;
    this.cartSvc = cartSvc;
    this.items = cartSvc.cart;
    this.address1 = '';
    this.address2 = '';
    this.city = '';
    this.state = '';
    this.zipcode = '';
  }

  submitOrder() {
    this.checkoutSvc.order.items = this.items
    this.checkoutSvc.order.address1 = this.address1;
    this.checkoutSvc.order.address2 = this.address2;
    this.checkoutSvc.order.city = this.city;
    this.checkoutSvc.order.state = this.state;
    this.checkoutSvc.order.zip = this.zipcode;
    this.checkoutSvc.placeOrder();
  }
}

CheckoutCtrl.$inject = ['checkoutService', 'cartService'];

export default CheckoutCtrl;
