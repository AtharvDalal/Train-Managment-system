import express from 'express'
import { AddTrain } from '../controllers/TrainControllers.js';

const router = express.Router();

router.post('/addtrain', AddTrain)

export default router