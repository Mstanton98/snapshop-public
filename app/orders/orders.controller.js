class OrderCtrl {
  constructor(orderSvc) {
    this.orderSvc = orderSvc;
    this.orders;
    this.items;

    this.orderSvc.getUserOrders()
      .then((res) => {
        this.orders = res;
      })
      .catch((err) => console.log(err));
  }

  getUserItems(orderId) {
    return this.orderSvc.getUserOrderItems(orderId)
      .then((res) => {
        this.items = res;
      })
      .catch((err) => console.log(err));
  }
}

OrderCtrl.$inject = ['orderService'];

export default OrderCtrl;
