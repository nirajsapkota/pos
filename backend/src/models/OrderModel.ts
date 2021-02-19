import mongoose from "mongoose"
import ProductSchema from "./ProductModel"
import CustomerSchema from "./CustomerModel"

const baseOptions = {
  discriminatorKey: "__type",
  collection: "orders"
}

const OrderSchemaBase = mongoose.model('Base', new mongoose.Schema({}, baseOptions))

const DineInOrderSchema = OrderSchemaBase.discriminator("Dine In", new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  table: Number,
  numGuests: Number,
  cart: Array,
  notes: String,
  paid: Boolean
}))

const TakeawayOrderSchema = OrderSchemaBase.discriminator("Takeaway", new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  customer: CustomerSchema.schema,
  cart: [ProductSchema.schema],
  paid: Boolean,
  notes: String,
  placed: Date
}))

/* Delivery address is contained within customer. */
const DeliveryOrderSchema = OrderSchemaBase.discriminator("Delivery", new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  customer: CustomerSchema.schema,
  cart: [ProductSchema.schema],
  paid: Boolean,
  notes: String,
  placed: Date
}))

export { 
  OrderSchemaBase as OrderModel,
  DineInOrderSchema as DineInOrderModel,
  TakeawayOrderSchema as TakeawayOrderModel,
  DeliveryOrderSchema as DeliverOrderModel
}