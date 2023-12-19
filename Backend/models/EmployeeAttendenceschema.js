// models/EmployeeAttendance.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const EmployeeAttendance = sequelize.define(
    "EmployeeAttendance",
    {
      employeeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      attendanceId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      tableName: "EmployeeAttendances",
      underscored: true,
    }
  );

  return EmployeeAttendance;
};
