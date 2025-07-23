//This code is used for connection to database
require("dotenv").config();
const { Sequelize } = require("sequelize");

// Create a new Sequelize instance
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false, // Set to true if you want to see queries in the console
}, {
    freezeTableName: true, // Prevents Sequelize from pluralizing table name
    timestamps: false, // Optional: Remove createdAt/updatedAt fields
});

// Test the connection
(async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully!");
    } catch (error) {
        console.error(" Database connection failed:", error);
    }
})();

module.exports = sequelize;