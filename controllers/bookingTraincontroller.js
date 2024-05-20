import { Booking } from "../models/BookingTrainSchema.js";
import { Train } from "../models/TrainSchema.js";

export const bookingTrain = async (req, res) => {
 // Assuming id is a valid ObjectId string
const trainId = req.params.trainId; // Assuming you're getting the trainId from request params

try {
  const train = await Train.findById(trainId);

  if (!train) {
    return res.status(404).json({ msg: "Train Not Found" });
  }

  if (train.availableSeats <= 0) {
    return res.status(400).json({ message: 'No available seats' });
  }

  // Create the booking
  const booking = new Booking({ passengerName, seatNumber, train });
  await booking.save();

  // Update the train's available seats
  train.availableSeats -= 1;
  await train.save();

  res.status(201).json(booking);
} catch (error) {
  console.log(error);
  res.status(500).json({ msg: "Error in Booking API" });
}
};


export const getAllbookings =async(req,res)=>{
         try {
            
            const bookings = await Booking.find().populate('train');
         res.status(200).json(bookings);
         } catch (error) {
            console.log(error);
        res.status(500).json({msg:"Error in getBookings Api"})
         }
}