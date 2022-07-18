import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js';
import connectDB from './config/db.js';
import colors from 'colors';
const app = express();

dotenv.config();
connectDB();

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
	res.send('API is running ....');
});

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow
			.bold
	)
);
