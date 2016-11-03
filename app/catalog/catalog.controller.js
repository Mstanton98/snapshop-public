class CatalogCtrl {
  constructor(cartSvc) {
    this.cartSvc = cartSvc;
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
    this.cameras = [{
      id: 1,
      name: 'Nikon D3100 DSLR',
      image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
      rating: 4,
      price: 369.99,
      onSale: true
    }, {
      id: 2,
      name: 'Canon EOS 70D',
      image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
      rating: 2,
      price: 1099.0,
      onSale: false
    }, {
      id: 3,
      name: 'Nikon D810A',
      image:'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
      rating: 3,
      price: 3796.95,
      onSale: true
    }, {
      id: 4,
      name: 'Nikon COOLPIX B500',
      image: 'http://pisces.bbystatic.com/image2/BestBuy_US/images/products/4997/4997200_sd.jpg;maxHeight=550;maxWidth=642',
      rating: 4,
      price: 259.99,
      onSale: true
    }, {
      id: 5,
      name: 'Canon EOS 5D Mark IV',
      image: 'https://static.bhphoto.com/images/images500x500/canon_eos_5d_mark_iv_1472097112000_1274706.jpg',
      rating: 3,
      price: 4599.00,
      onSale: false
    }, {
      id: 6,
      name: 'Canon EOS Rebel SL1',
      image: 'http://www.buydig.com/shop/product-image.aspx?size=500&picId=29943',
      rating: 5,
      price: 499.00,
      onSale: false
    }, {
      id: 7,
      name: 'Leica M6',
      image:'https://d1jqecz1iy566e.cloudfront.net/large/bf038.jpg',
      rating: 5,
      price: 7299.95,
      onSale: false
    }, {
      id: 8,
      name: 'Nikon D7200',
      image:'http://cdn.mos.cms.futurecdn.net/ef9f6ec0a94a4ddaa501e73edcb46da8-650-80.jpg',
      rating: 3.8,
      price: 831.95,
      onSale: false
    }, {
      id: 9,
      name: 'Panasonic LX100',
      image:'http://cdn.mos.cms.futurecdn.net/51b3bea2fd56f3b5fe281cf1d2f4965c-650-80.jpg',
      rating: 4.8,
      price: 500.00,
      onSale: true
    }, {
      id: 10,
      name: 'Fujifilm X-A2',
      image:'http://www.adorama.com/images/Large/ifjxa2sl.jpg',
      rating: 3.5,
      price: 549.00,
      onSale: false
    }, {
      id: 11,
      name: 'Nikon 1-J5',
      image:'http://www.adorama.com/images/Large/ink1j5wt3.jpg',
      rating: 3.6,
      price: 879.00,
      onSale: false
    }, {
      id: 12,
      name: 'Panasonic DMC-GM5',
      image:'http://www.adorama.com/images/Large/ipcdmcgm5r.jpg',
      rating: 4.2,
      price: 499.00,
      onSale: false
    }, {
      id: 13,
      name: 'Canon EOS M10',
      image:'http://www.adorama.com/images/Large/icam10k.jpg',
      rating: 3.8,
      price: 449.00,
      onSale: true
    }];
  }
  addToCart(camera) {
    this.cartSvc.addToCart(camera);
    Materialize.toast('Item added to cart', 3000);
  }
}

CatalogCtrl.$inject = ['cartService'];

export default CatalogCtrl;
