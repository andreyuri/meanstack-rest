const mongoose = require('mongoose');
module.exports = 
    // MongoDB connection
    mongoose.connect(
        "mongodb+srv://nodeapi:" + 
        process.env.MONGO_ATLAS_PW + 
        "@node-api-shop-39t16.mongodb.net/test?retryWrites=true",
        { useNewUrlParser: true }
    );