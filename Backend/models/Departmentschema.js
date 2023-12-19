// models/Department.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Department = sequelize.define(
    "Department",
    {
      departmentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      departmentName: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "Departments",
      underscored: true,
    }
  );

  return Department;
};
