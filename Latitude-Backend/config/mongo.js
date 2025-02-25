const mongoose = require('mongoose');

// MongoDB connection setup with retries
const connectMongoDB = async () => {
    try {
        // Check if a connection already exists
        if (mongoose.connection.readyState === 1) {
            console.log('MongoDB is already connected.');
            return;
        }

        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI);

        console.log('MongoDB connected successfully.');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);

        // Retry connection after 5 seconds
        setTimeout(connectMongoDB, 5000);
    }
};

// Initial MongoDB connection attempt
connectMongoDB();

// Handle disconnection events
mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected. Attempting to reconnect...');
    connectMongoDB(); // Reconnect when the database connection is lost
});

// Handle connection errors after initial connection
mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err.message);
});

// Handle process termination (e.g., Ctrl+C)
process.on('SIGINT', async () => {
    try {
        await mongoose.connection.close();
        console.log('MongoDB connection closed due to application termination.');
        process.exit(0);
    } catch (err) {
        console.error('Error closing MongoDB connection:', err.message);
        process.exit(1);
    }
});

// Export the connection function for use in other parts of the app
module.exports = connectMongoDB;
