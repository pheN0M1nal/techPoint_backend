import express from 'express'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

import connectDB from './config/db.js'
import colors from 'colors'
import { notFound, errorHandler } from '../middleware/errorMiddleware.js'
const app = express()

// for accepting Body from Json
app.use(express.json())

// // middleware setup
// app.use((req, res, next) => {
// 	console.log('HELLO');
// 	next();
// });

dotenv.config()
connectDB()

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

app.get('/', (req, res) => {
	res.send('API is running ....')
})

// 404
app.use(notFound)

// error middleware
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow
			.bold
	)
)
