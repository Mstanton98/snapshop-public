class CatalogService {
  constructor($http) {
    this.$http = $http;
  }

  getCameraArr() {
    return this.$http.get('/api/cameras')
      .then((res) => {
        res.data.forEach((camera) => {
          camera.price = parseFloat(camera.price);
        })
        return res.data;
      })
      .catch((err) => {
        console.error(err);
      })
  }
}

CatalogService.$inject = ['$http'];

export default CatalogService;
