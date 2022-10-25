const controllers = require('../controllers/collector');
module.exports = [
    {
        method : 'GET',
        path : '/produk',
        handler : controllers.products.browse,
    },{
        method : 'GET',
        path : '/produk/{id}',
        handler : controllers.products.read,
    },{
        method : 'POST',
        path : '/produk',
        handler : controllers.products.add,
    },{
        method : 'PUT',
        path : '/produk/{id}',
        handler : controllers.products.edit,
    },{
        method : 'DELETE',
        path : '/produk/{id}',
        handler : controllers.products.deleted,
    },
];