const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        console.log(process.env.MONGO_URI); // Log the MongoDB URI
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ MongoDB connected');
    } catch (error) {
        console.error('❌ MongoDB connection failed:', error.message);
        process.exit(1); // Exit process on failure
    }
};

module.exports = connectDB;
