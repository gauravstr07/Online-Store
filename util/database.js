const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Akshu2680", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
