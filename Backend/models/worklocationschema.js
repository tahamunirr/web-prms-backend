const pool = require("../app");

const createWorkLocation = async (workLocation) => {
  const { location_id, location, number_of_employees, city } = workLocation;
  const result = await pool.query(
    "INSERT INTO Work_Location (location_id, location, number_of_employees, city) VALUES ($1, $2, $3, $4) RETURNING *",
    [location_id, location, number_of_employees, city]
  );
  return result.rows[0];
};

const getAllWorkLocations = async () => {
  const result = await pool.query("SELECT * FROM Work_Location");
  return result.rows;
};

const getWorkLocationById = async (locationId) => {
  const result = await pool.query(
    "SELECT * FROM Work_Location WHERE location_id = $1",
    [locationId]
  );
  return result.rows[0];
};

const updateWorkLocation = async (locationId, updatedWorkLocation) => {
  const { location, number_of_employees, city } = updatedWorkLocation;
  const result = await pool.query(
    "UPDATE Work_Location SET location = $1, number_of_employees = $2, city = $3 WHERE location_id = $4 RETURNING *",
    [location, number_of_employees, city, locationId]
  );
  return result.rows[0];
};

const deleteWorkLocation = async (locationId) => {
  const result = await pool.query(
    "DELETE FROM Work_Location WHERE location_id = $1 RETURNING *",
    [locationId]
  );
  return result.rows[0];
};

module.exports = {
  createWorkLocation,
  getAllWorkLocations,
  getWorkLocationById,
  updateWorkLocation,
  deleteWorkLocation,
};
