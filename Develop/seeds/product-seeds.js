
const { Product } = require('../models');

const productData = [
  {
    product_name: 'Laptop',
    price: 999.99,
    stock: 10,
    category_id: 1
  },
  {
    product_name: 'T-shirt',
    price: 19.99,
    stock: 20,
    category_id: 2
  },
  {
    product_name: 'JavaScript Book',
    price: 29.99,
    stock: 15,
    category_id: 3
  },
  {
    product_name: 'LEGO Set',
    price: 49.99,
    stock: 30,
    category_id: 4
  }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
