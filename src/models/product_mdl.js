const Sequelize = require('sequelize');
const db = require('../dbconnect');

const product = db.define('product',
{
    id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name : Sequelize.TEXT,
    price : Sequelize.STRING,
    stock : Sequelize.STRING,
    imageUrl : Sequelize.STRING,
    description : Sequelize.TEXT,
    createdAt : Sequelize.DATE,
    updatedAt : Sequelize.DATE,
},{
    freezeTableName : true,
    timestamps:false
});

product.sync();
// fruits.removeAttribute('id');
module.exports = product;