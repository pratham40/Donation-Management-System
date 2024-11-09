import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from "./routes/user.routes.js"
const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(morgan('dev'));

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
}

app.use(cors(corsOptions));

app.options('*', cors());



//user routes

app.use("/api/v1/user",userRoutes)



export default app;