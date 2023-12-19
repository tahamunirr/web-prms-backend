// models/Leave.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Leave = sequelize.define(
    "Leave",
    {
      leaveDays: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      employeeId: {
        type: DataTypes.INTEGER,
      },
      leaveDate: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "Leaves",
      underscored: true,
    }
  );

  return Leave;
};
