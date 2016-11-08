class CatalogCtrl {
  constructor(cartSvc, catalogSvc) {
    this.cartSvc = cartSvc;
    this.catalogSvc = catalogSvc;
    this.searchText = '';
    this.sortBy = '';
    this.selectOrder = [
      {
        label: 'Sort By',
        value: ''
      }, {
        label: 'Price',
        value: 'price'
      }, {
        label: 'On Sale',
        value: 'onSale'
      }, {
        label: 'Rating',
        value: 'rating'
      }
    ];
  }

  getCameras() {
    return this.catalogSvc.cameras;
  }

  addToCart(camera) {
    this.cartSvc.addToCart(camera);
    Materialize.toast('Item added to cart', 3000);
  }
}

CatalogCtrl.$inject = ['cartService', 'catalogService'];

export default CatalogCtrl;
