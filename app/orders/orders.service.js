class OrderService {
  constructor($http) {
    this.$http = $http;
  }

  getUserOrders() {
    return this.$http.get('/api/orders')
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err);
      })

  }

  getUserOrderItems(orderId) {
    return this.$http.get(`/api/orders/${orderId}`)
      .then((res) => {
        console.log(res.data.items);
        return res.data.items;
      })
      .catch((err) => {
        console.error(err);
      })
  }
}

OrderService.$inject = ['$http'];

export default OrderService;
