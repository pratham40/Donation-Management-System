import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from "./routes/user.routes.js"
const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(morgan('dev'));

const corsOption={
    origin:'http://localhost:5173',
    credentials:true,
    methods:['GET','POST','PUT','DELETE','OPTIONS']
}

app.use(cors(corsOption));

// Handle preflight requests
app.options('*', cors());

//user routes

app.use("/api/v1/user",userRoutes)

export default app;