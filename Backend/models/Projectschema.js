const pool = require("../app");

const createProject = async (project) => {
  const { project_name, project_description } = project;
  const result = await pool.query(
    "INSERT INTO Project (project_name, project_description) VALUES ($1, $2) RETURNING *",
    [project_name, project_description]
  );
  return result.rows[0];
};

const getAllProjects = async () => {
  const result = await pool.query("SELECT * FROM Project");
  return result.rows;
};

const getProjectById = async (projectId) => {
  const result = await pool.query(
    "SELECT * FROM Project WHERE project_id = $1",
    [projectId]
  );
  return result.rows[0];
};

const updateProject = async (projectId, updatedProject) => {
  const { project_name, project_description } = updatedProject;
  const result = await pool.query(
    "UPDATE Project SET project_name = $1, project_description = $2 WHERE project_id = $3 RETURNING *",
    [project_name, project_description, projectId]
  );
  return result.rows[0];
};

const deleteProject = async (projectId) => {
  const result = await pool.query(
    "DELETE FROM Project WHERE project_id = $1 RETURNING *",
    [projectId]
  );
  return result.rows[0];
};

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
