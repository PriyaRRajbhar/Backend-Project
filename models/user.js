const mongoose = require("mongoose");   // Import the Mongoose library, We need mongoose to define how data looks in MongoDB

const userSchema = new mongoose.Schema({   //A schema defines the structure and validation rules of data stored in MongoDB.
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,     // email field of type String DATA TYPE
    required: true,   // user must provide an email
    unique: true     //no duplicate emails allowed
  },
  password: {
    type: String,
    required: true                //Password should NEVER be stored as plain text, (We’ll fix this in authentication step)
  }
});

module.exports = mongoose.model("User", userSchema);  //Model is what we use to: Save data, Find data, Update data, Delete data
// Creates a Model
// "User" → model name
// userSchema → structure
//“I created a User model using Mongoose to perform CRUD operations on user data.”