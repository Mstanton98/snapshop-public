class CartService {
  constructor() {
    this.cart = [];
    this.subtotal = 0;
  }

  addToCart(camera) {
    this.subtotal += camera.price;
    this.cart.push(camera);
  }
}

export default CartService;
