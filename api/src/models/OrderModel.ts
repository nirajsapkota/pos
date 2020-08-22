import mongoose from "mongoose";
import ProductSchema from "./ProductModel";
import CustomerSchema from "./CustomerModel";

const baseOptions = {
  discriminatorKey: "__type",
  collection: "orders"
}

const Base = mongoose.model('Base', new mongoose.Schema({}, baseOptions));

/* DineInOrderSchema does not have a customer as the only information
 * we would have is their name -- therefore we would be creating useless
 * customer records that can't be used again.
 */
const DineInOrderSchema = Base.discriminator("Dine In", new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  tableNumber: Number,
  numGuests: Number,
  notes: String,
  cart: [ProductSchema],
  paid: Boolean,
  placed: Date
}));

const TakeawayOrderSchema = Base.discriminator("Takeaway", new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  customer: CustomerSchema,
  notes: String,
  cart: [ProductSchema],
  paid: Boolean,
  placed: Date
}));

const DeliveryOrderSchema = Base.discriminator("Delivery", new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  customer: CustomerSchema,
  notes: String,
  cart: [ProductSchema],
  paid: Boolean,
  placed: Date
}));

export { 
  DineInOrderSchema,
  TakeawayOrderSchema,
  DeliveryOrderSchema
};