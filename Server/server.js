import { config } from "dotenv";
import app from "./app.js";
import connectDB from "./config/dbConnection.js";
import cloudinary from "cloudinary"

config();

cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, async() => {
    await connectDB();
    console.log(`Server running in http://localhost:${PORT}`);
});