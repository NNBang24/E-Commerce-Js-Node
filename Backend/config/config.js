require("dotenv").config();

module.exports = {
    development: {
        dialect: "mysql",
        database: process.env.DB_DATABASE,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        }
    },

    production: {
        dialect: "mysql",
        database: process.env.DB_DATABASE,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialectOptions: {
            ssl: {
                rejectUnauthorized: true
            }
        }
    }
};