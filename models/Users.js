// Require Mongoose
const mongoose = require('mongoose');

// Create a Schema Class
const Schema = mongoose.Schema;

// Create users Schema
const UsersSchema = new Schema({
  user:{
    name: String,
    username: String,
    password: String,
    email: String,
    edu: String,
    exp: String,
    city: String
  }
    
});

// Create the users model with Mongoose
const user = mongoose.model('Users', UsersSchema);

// Export the Model
module.exports = user;