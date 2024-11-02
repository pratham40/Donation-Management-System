import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const {connection} = await mongoose.connect(
            process.env.MONGO_URI || 'mongodb://localhost:27017/DonationManagementSystem',
        );

        console.log(`MongoDB Connected: ${connection.host}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
};

export default connectDB;