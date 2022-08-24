import express from 'express'
import {
	addOrderItems,
	getMyOrders,
	getOrderById,
	getOrders,
	updateOrderToDelivered,
	updateOrderToPaid,
} from '../controllers/orderController.js'
import { protect, admin } from '../../middleware/authMiddleware.js'
const router = express.Router()

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id/pay').put(protect, updateOrderToPaid) // /:id items has to be at last
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered) // /:id items has to be at last

router.route('/:id').get(protect, getOrderById) // /:id items has to be at last

export default router
