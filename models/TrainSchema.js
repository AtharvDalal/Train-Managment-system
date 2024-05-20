import mongoose from "mongoose";



const TrainSchema = new  mongoose.Schema({
  name: String,
  departureTime: Date,
  arrivalTime: Date,
  seats: Number,
  availableSeats: Number
})

export const Train = mongoose.model('Train', TrainSchema)