const mongoose = require("mongoose");

//Initialize the database connection. MongoDB default port is 27017, but is configurable.
const connectDB = async () => {
    mongoose.connect('mongodb://localhost:27017/testDB');
}

module.exports = connectDB;