// app.js
const express = require("express");
const app = express();
const { Pool } = require("pg");
// const employeeRoutes = require("./routes/Employeeroutes");
// const departmentRoutes = require("./routes/departementprojectroutes");
const accountDetailsRoutes = require("./routes/AccountDetailsRoutes");
// const salaryRoutes = require("./routes/salaryroutes");
// const projectRoutes = require("./routes/projectroutes");
// const departmentProjectRoutes = require("./routes/departmentProjectRoutes");
// const educationRoutes = require("./routes/Educationroutes");
// const leaveRoutes = require("./routes/leaveroutes");
// const attendanceRoutes = require("./routes/attendanceRoutes");
// const employeeAttendanceRoutes = require("./routes/employeeAttendanceRoutes");
// const workLocationRoutes = require("./routes/worklocationroutes");

app.use("/webprms");
app.use(errorMiddleware);

mongoose
  .connect("mongodb://127.0.0.1:27017/webrpms")
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on Port ${PORT}`);
    });
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// app.use("/api", employeeRoutes);

// app.use("/api", departmentRoutes);

app.use("/api", accountDetailsRoutes);

// app.use("/api", salaryRoutes);

// app.use("/api", projectRoutes);

// app.use("/api", departmentProjectRoutes);

// app.use("/api", educationRoutes);

// app.use("/api", leaveRoutes);

// app.use("/api", attendanceRoutes);

// app.use("/api", employeeAttendanceRoutes);

// app.use("/api", workLocationRoutes);

app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = pool;
