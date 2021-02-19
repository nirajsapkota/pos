import mongoose from "mongoose"

const ReservationSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  table: Number,
  name: String,
  contact: String,
  numGuests: Number,
  arrival: Date,
  notes: String
})

export default mongoose.model("Reservation", ReservationSchema)