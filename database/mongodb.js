const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false);

function connectToMongoDB() {
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
        console.log("MongoDB Connected");
        
        }).catch((err) => {
        console.log("Error in connectToMongoDB: " + err);
        
    })
}

module.exports = connectToMongoDB;
