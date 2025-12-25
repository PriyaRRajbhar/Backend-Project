const express = require ('express');  // Import the Express library
const connectDB = require("./config/db"); // Import the database connection function
const app = express(); // Create an Express application instance
app.use(express.json());
app.use("/api/auth", require("./routes/authRoutes"));


const PORT = 5000; // Define the port number

app.get("/", (req, res) => {             // someone visits the route "/" 
    // res.send("Hello from backend");  
    res.send('server with DB is running')   // then send this response, backend sends response to the browser/client/frontend
});

app.listen(PORT, () => {              // Start the server and listen on the defined port
    console.log(`Server started on port ${PORT}`);
});



