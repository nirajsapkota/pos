import mongoose from "mongoose";
import ProductSchema from "./ProductModel";

const MenuGroupSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  products: [ProductSchema]
});

export default mongoose.model("MenuGroup", MenuGroupSchema);