const antwerp = require("./antwerp");
const uvs = require("./uvs");
const toronto = require("./toronto");
const khatgal = require("./khatgal");

module.exports.mocks = {
  "51.219448,4.402464": antwerp,
  "43.653225,-79.383186": toronto,
  "49.6504711,92.6298149": uvs,
  "50.43859,100.1614523": khatgal,
};

const mockImages = [
  "https://ihotel.mn/img/uploads/hotels/ec0edaca099c9372cffe04eff754374e.jpg",
  "https://ihotel.mn/img/uploads/hotels/919704d89ffa15b72bc76026fada2a1b.jpg",
  "https://ihotel.mn/img/uploads/hotels/a4d3bbaadbb0a60594239251ca9a842f.jpg",
  "https://ihotel.mn/img/uploads/hotels/f50172bbf6918a3d19fa67028ac2c34a.jpg",
  "https://lh5.googleusercontent.com/p/AF1QipOJmhZNgx4BKhpvmBk3RkJJYu9x32bDqMrBKJW1=w426-h240-k-no",
  "https://ihotel.mn/img/uploads/hotels/550bf3e24c2087279d7c205157e66e89.png",
  "https://m.buro247.mn/images/toilogt_album.jpg",
];

module.exports.addMockImage = (restaurant) => {
  const randomImage =
    mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
  restaurant.photos = [randomImage];
  return restaurant;
};
