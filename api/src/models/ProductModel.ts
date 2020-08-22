import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number
});

export default mongoose.model("Product", ProductSchema);