import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: String,
  name: String,
  address: String
});

export default mongoose.model("Customer", CustomerSchema);