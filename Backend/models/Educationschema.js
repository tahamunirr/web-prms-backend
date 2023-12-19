// models/Education.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Education = sequelize.define(
    "Education",
    {
      educationId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      employeeId: {
        type: DataTypes.INTEGER,
      },
      degree: {
        type: DataTypes.STRING,
      },
      graduationYear: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "Educations",
      underscored: true,
    }
  );

  return Education;
};
