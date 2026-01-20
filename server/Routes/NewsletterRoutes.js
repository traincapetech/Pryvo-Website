import express from 'express'
import { getSubscribers, sendNewsletter, subscribe, unsubscribe } from '../Controller/Newsletter.js';

export const router = express.Router();

router.post("/subscribe", subscribe);
router.post("/send", sendNewsletter);
router.get("/", getSubscribers);
router.post("/unsubscribe", unsubscribe);


