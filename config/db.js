const mongoose = require('mongoose');
if (process.env.NODE_ENV !== "production") {
    require('dotenv').config({ path: '.env'});
  };

const connectDB = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${connection.connection.host}:${process.env.PORT}`);
}; 

module.exports = connectDB;