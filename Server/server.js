import { config } from "dotenv";
import app from "./app.js";
import connectDB from "./config/dbConnection.js";

config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, async() => {
    await connectDB();
    console.log(`Server running in http://localhost:${PORT}`);
});