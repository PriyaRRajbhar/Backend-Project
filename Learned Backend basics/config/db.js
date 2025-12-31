const mongoose = require("mongoose");  // Import the Mongoose library

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/taskapp");
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;