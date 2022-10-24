const pathfolder = require('../pathfolder');
const controllers = require(pathfolder + 'controllers/collector')
module.exports = [
    {
        method : 'GET',
        path : '/eapi',
        handler : controllers.ea_prod.getItemProd,
    },
];