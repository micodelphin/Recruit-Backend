require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path")

const authRoutes = require("../routes/authRoutes");
const applicationRoutes = require("../routes/applicationRoutes")
const userRoutes = require("../routes/userRoutes")
const dashboardRoutes = require("../routes/dashboardRoutes")
const nidaNesaRoutes = require("../routes/nidaNesaRoutes")
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../config/swagger');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/auth", authRoutes);
app.use("/api/applications", applicationRoutes)
app.use("/api/users", userRoutes)
app.use("/api/dashboard",dashboardRoutes)
app.use("/api", nidaNesaRoutes)

app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "Server is running" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
