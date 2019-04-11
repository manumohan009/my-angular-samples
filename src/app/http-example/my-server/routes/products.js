var express = require('express');
var router = express.Router();

var paths = require('./paths');
var ResponseHandler = require(paths.ResponseHandler);

const productData = [
  {
    id: 1,
    name: 'Product 1',
    price: 1000
  },
  {
    id: 2,
    name: 'Product 2',
    price: 500
  }
]

router.get('/', function(req, res, next) {
  ResponseHandler.handleSuccess(productData, res);
})

module.exports = router;
