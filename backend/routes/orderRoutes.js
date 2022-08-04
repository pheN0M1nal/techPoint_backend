import express from 'express'
import {
	addOrderItems,
	getMyOrders,
	getOrderById,
	updateOrderToPaid,
} from '../controllers/orderController.js'
import { protect } from '../../middleware/authMiddleware.js'
const router = express.Router()

router.route('/').post(protect, addOrderItems)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id/pay').put(protect, updateOrderToPaid) // /:id items has to be at last

router.route('/:id').get(protect, getOrderById) // /:id items has to be at last

export default router
