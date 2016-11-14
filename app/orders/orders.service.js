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
}

OrderService.$inject = ['$http'];

export default OrderService;
