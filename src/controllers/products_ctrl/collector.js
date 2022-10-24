// use collector
const browse = require('./browse');
const read = require('./read');
const edit = require('./edit');
const add = require('./add');
const deleted = require('./deleted');

//inis
const products_ctrl = {};

// define B.R.E.A.D
products_ctrl.browse = browse;
products_ctrl.read = read;
products_ctrl.edit = edit;
products_ctrl.add = add;
products_ctrl.deleted = deleted;

module.exports = products_ctrl;
