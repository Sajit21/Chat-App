import express from 'express';
import authRoutes from './routes/auth.route.js';
import messageRoute from './routes/message.route.js';
import dotenv from 'dotenv';
dotenv.config();

const app= express();

app.get("/api/auth",authRoutes);
app.get("/api/message",messageRoute);

app.listen(3000,()=>{
    console.log("the server is running on port 3000")
    
})