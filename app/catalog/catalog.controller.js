class CatalogCtrl {
  constructor(cartSvc, catalogSvc) {
    this.cartSvc = cartSvc;
    this.catalogSvc = catalogSvc;
    this.searchText = '';
    this.cameras;
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


    this.catalogSvc.getCameraArr()
      .then((cameras) => {
        this.cameras = cameras;
      })
      .catch((err) => console.log(err));
  }

  addToCart(camera) {
    Materialize.toast('Item added to cart', 4000);
    this.cartSvc.addToCart(camera);
  }
}

CatalogCtrl.$inject = ['cartService', 'catalogService'];

export default CatalogCtrl;
