import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { connectDB } from './db/connectDB.js'

import authRoutes from './routes/auth.route.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors ({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json()); // allow us to parse incoming request bodies as JSON: req.body
app.use(cookieParser()); // allow us to parse incoming cookies: req.cookies

app.use("/api/auth", authRoutes);

app.listen(PORT, () => { 
  connectDB();
  console.log('Server is running on port:', PORT);
});
