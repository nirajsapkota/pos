import mongoose from "mongoose"

const CustomerSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String
})

export default mongoose.model("Customer", CustomerSchema)