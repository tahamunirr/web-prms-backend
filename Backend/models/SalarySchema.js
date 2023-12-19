// models/Salary.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Salary = sequelize.define(
    "Salary",
    {
      employeeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      salaryId: {
        type: DataTypes.FLOAT,
        primaryKey: true,
      },
      grossSalary: {
        type: DataTypes.FLOAT,
      },
      hourlyPay: {
        type: DataTypes.FLOAT,
      },
      tax: {
        type: DataTypes.INTEGER,
      },
      accountId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "Salaries",
      underscored: true,
    }
  );

  return Salary;
};
