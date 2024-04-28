const Sequelize = require('sequelize');

// Define environment variables directly
const DB_NAME = 'your_database_name';
const DB_USER = 'your-mysql-username';
const DB_PASSWORD = 'your_database_password';

// Create a new Sequelize instance
const sequelize = new Sequelize(
  DB_NAME,         // Database name
  DB_USER,         // Database username
  DB_PASSWORD,     // Database password
  {
    host: 'localhost',     // Database host
    dialect: 'mysql',      // Database dialect (e.g., mysql, postgres, etc.)
    port: 3306,            // Database port (default is 3306 for MySQL)
    logging: false         // Disable logging (optional)
  }
);

module.exports = sequelize;
