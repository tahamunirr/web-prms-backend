// models/AccountDetails.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const AccountDetails = sequelize.define(
    "AccountDetails",
    {
      accountId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      bankName: {
        type: DataTypes.STRING,
      },
      accountNumber: {
        type: DataTypes.FLOAT,
      },
      employeeId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "AccountDetails",
      underscored: true,
    }
  );

  return AccountDetails;
};
