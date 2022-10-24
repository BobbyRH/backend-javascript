const products = require('./product_mdl');
const activitydata = require('./activitydata_mdl');

const model = {};

model.products = products;
model.activitydata = activitydata;

module.exports = model;