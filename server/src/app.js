import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productRouter from './routes/product';
import categoryRouter from './routes/category';
import orderRouter from './routes/order';
import authRouter from './routes/auth';
import router from "./routes/account";
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', productRouter);
app.use('/api', categoryRouter);
app.use('/api', orderRouter);
app.use('/api', authRouter);
app.use('/api',router)
mongoose.connect("mongodb://127.0.0.1:27017/web209_assignment");
export const viteNodeApp = app;
