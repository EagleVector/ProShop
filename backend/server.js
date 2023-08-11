import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import colors from "colors";

dotenv.config();
const port = process.env.PORT || 5000;

connectDB(); // Connect to mongoDB

const app = express();

app.get('/', (req, res) => {
  res.send("API is running...");
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`Server running on port ${port}`.yellow.bold));