import { Train } from "../models/TrainSchema.js";


export const AddTrain = async (req, res) => {
  try {
    const { name, departureTime, arrivalTime, seats, availableSeats } = req.body;

    const newTrain = new Train({ name, departureTime, arrivalTime, seats, availableSeatss: seats });

    const savedTrain = await newTrain.save();

    res.status(201).json({
      msg: "Train added successfully",
      savedTrain
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error in AddTrain API" });
  }
};
