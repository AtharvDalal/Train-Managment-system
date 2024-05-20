import express from 'express'
import { bookingTrain, getAllbookings } from '../controllers/bookingTraincontroller.js';

const router = express.Router();

router.post('/booktrain', bookingTrain)
router.get('/getallbookings', getAllbookings)

export default router