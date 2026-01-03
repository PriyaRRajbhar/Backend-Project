const express = require("express");    // import
const mongoose = require("mongoose");  // import
const connectDB = require("./config/db");  // import
const cors = require("cors");           // import

const authRoutes = require("./routes/authRoutes");    // import
const taskRoutes = require("./routes/taskRoutes");   // import

const app = express();   // create app
connectDB();                 // connect to DB

// middleware
app.use(cors());         // enable CORS
app.use(express.json());  // parse JSON bodies

// routes
app.use("/api/auth", authRoutes);   // auth routes
app.use("/api/tasks", taskRoutes);  // task routes

// test route
app.get("/", (req, res) => {            // root route
  res.send("Server is running");    // send response
});                                // end route

const PORT = 3000;                 // define port

mongoose                          // connect to MongoDB
  .connect("mongodb://localhost:27017/")
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch(err => console.log(err));
