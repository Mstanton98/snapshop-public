class CartService {
  constructor() {
    this.cart = [];
    this.subtotal = 0;
  }

  addToCart(camera) {
    this.subtotal += parseFloat(camera.price);
    this.cart.push(camera);
    console.log(this.subtotal);
  }
}

export default CartService;
