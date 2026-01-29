const express = require('express');
const cors = require('cors');
const connectDB = require("./config/database");
const authRoutes = require("./routes/authRoute");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'User Management System API' });
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});