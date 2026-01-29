const mogoose = require("mongoose");

const connectDB = async () => {
    try {
        await mogoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB connected");
    }
    catch (error) {
        console.log("Database connection failed: ", error);
    }
}
module.exports = connectDB;