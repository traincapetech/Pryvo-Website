import express from 'express';
 import Subscription from '../Models/Subscription.js';
 import User from "../Models/User.js";

 const router = express.Router();

 // Get all subscriptions
    router.get('/', async (req, res) => { 
        try {
            const {page = 1, limit = 20} = req.query;

            const skip = (page - 1) * limit;

            const subscriptions = await Subscription.find()
                .skip(parseInt(skip))
                .limit(parseInt(limit))
                .sort({ createdAt: -1 })
                .populate('userId', 'name email');

            const total = await Subscription.countDocuments();

            res.status(200).json({
                success: true,
                subscriptions,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                total,
                totalPages: Math.ceil(total / limit)
                }
            });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Server Error', error: error.message });
        }
    });

export { router as adminSubscription };
