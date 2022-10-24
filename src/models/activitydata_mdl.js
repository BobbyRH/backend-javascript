const Sequelize = require('sequelize');
const db = require('../dbconnect');

const activitydata = db.define('activitydatas',
{
    id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    keys : Sequelize.STRING,
    values : Sequelize.STRING,
},{
    freezeTableName : true,
});

activitydata.sync();
// fruits.removeAttribute('id');
module.exports = activitydata;