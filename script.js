const express = require("express");              // Import Express
const connectDB = require("./config/db");        // Import DB connection
const taskRoutes = require("./routes/taskRoutes"); // ✅ Import task routes

const app = express();                           // Create app

connectDB();                                     // ✅ Connect to MongoDB

app.use(express.json());                         // Parse JSON bodies
app.use("/api/tasks", taskRoutes);               // Use task routes

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Server with DB is running");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// const cors = require("cors");
// app.use(cors());                // Cross Origin Resource Sharing // ORIGIN -> protocol + domain + port // Allow requests from this origin


