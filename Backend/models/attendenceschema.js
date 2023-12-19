// models/Attendance.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Attendance = sequelize.define(
    "Attendance",
    {
      employeeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      attendanceId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      hoursWorked: {
        type: DataTypes.INTEGER,
      },
      leaveDays: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "Attendances",
      underscored: true,
    }
  );

  return Attendance;
};
