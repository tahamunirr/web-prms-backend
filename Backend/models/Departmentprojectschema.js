// models/DepartmentProject.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const DepartmentProject = sequelize.define(
    "DepartmentProject",
    {
      departmentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      projectId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      tableName: "DepartmentProjects",
      underscored: true,
    }
  );

  return DepartmentProject;
};
