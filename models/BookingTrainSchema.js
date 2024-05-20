import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    train: { type: mongoose.Types.ObjectId, ref: 'Train' },
    passengerName: String,
  seatNumber: Number,
  bookingDate: { type: Date, default: Date.now }    
})

export const Booking = mongoose.model('Booking', BookingSchema)