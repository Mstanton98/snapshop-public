class OrderCtrl {
  constructor(orderSvc) {
    this.orderSvc = orderSvc;
    this.orders;

    this.orderSvc.getUserOrders()
      .then((res) => {
        this.orders = res;
      })
      .catch((err) => console.log(err));
  }
}

OrderCtrl.$inject = ['orderService'];

export default OrderCtrl;
