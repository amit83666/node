//const { Sequelize } = require("sequelize");

module.exports = {
    HOST : 'localhost',
    USER : 'root',
    PASSWORD : 'Amit@123456',
    DB : 'hotelbook',
    dialect:'mysql',
        pool:{
            max:5,
            min:0,
            acquire:30000,
            idle:10000
        }
}

