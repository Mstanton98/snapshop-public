class CartCtrl {
  constructor(cartSvc) {
    this.cartSvc = cartSvc;
    this.subtotal = 0;
  }

  cart() {
    return this.cartSvc.cart;
  }
  
  getSubtotal() {
    return this.cartSvc.subtotal;
  }
}

CartCtrl.$inject = ['cartService'];

export default CartCtrl;
