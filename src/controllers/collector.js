// const fruits_ctrl = require('./fruits_ctrl/collector');
const products_ctrl = require('./products_ctrl/collector');
const elapi_ctrl = require('../controllers/elapi/getProduct');
const controllers = {};

// include all controller, this here.
controllers.products = products_ctrl;
controllers.ea_prod = elapi_ctrl;

module.exports = controllers;
