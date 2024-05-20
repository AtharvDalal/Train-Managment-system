import express from "express";
import bodyParser from "body-parser";
import DbConnection from "./dbCinnection.js";
import booking from './routes/BookingRoute.js'
import train from './routes/AddTrainRoutes.js'

const app = express();

const PORT = 8000;


app.use(bodyParser.json())


app.use('/api', booking)
app.use('/api', train)


app.listen(PORT,()=> console.log("Server is Running On Port 8000"))

DbConnection()