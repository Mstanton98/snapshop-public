class CartCtrl {
  constructor(cartSvc) {
    this.cartSvc = cartSvc;
    this.subtotal = 0;
  }

  addToCart(camera) {
    this.cart.push(camera);
    this.subtotal += camera.price;
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
