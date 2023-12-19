// models/Employee.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Employee = sequelize.define(
    "Employee",
    {
      employeeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      hireDate: {
        type: DataTypes.DATE,
      },
      city: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "Employees", // Specify the table name in PostgreSQL
      underscored: true, // Use underscores instead of camelCase for column names
    }
  );

  return Employee;
};
