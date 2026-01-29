const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("MongoDB URL:", process.env.MONGODB_URL); // ye add karo
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Database connection failed: ", error);
  }
};


module.exports = connectDB;
