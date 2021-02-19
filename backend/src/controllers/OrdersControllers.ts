import mongoose from "mongoose"

import {
  OrderModel,
  DineInOrderModel,
  TakeawayOrderModel,
  DeliverOrderModel
} from "../models"

import {
  DineInOrderCreationRequest,
  TakeawayOrderCreationRequest,
  DeliveryOrderCreationRequest,
  OrderUpdateRequest,
  OrderDeletionRequest
} from "../typings/requests"

const CreateDineInOrder = (req: DineInOrderCreationRequest): Promise<any> => {
  
  const order = new DineInOrderModel({
    _id: new mongoose.Types.ObjectId(),
    table: req.table,
    numGuests: req.numGuests,
    cart: req.cart,
    notes: req.notes,
    paid: req.paid
  })
  
  return order.save()
    .then(result => { return [201, `Successfully placed dine-in order ${order._id}.`] })
    .catch(error => { return [500, `An internal server error occurred: ${error}`] })

}

const CreateTakeawayOrder = (req: TakeawayOrderCreationRequest): Promise<any> => {

  return new Promise((resolve, reject) => {
    resolve("Created takeaway order.")
  })
  
}

const CreateDeliveryOrder = (req: DeliveryOrderCreationRequest): Promise<any> => {

  return new Promise((resolve, reject) => {
    resolve("Created delivery order.")
  })

}

const GetOrders = (): Promise<any> => {
  
  return OrderModel.find()
    .then(result => { return [200, `Successfully returned a list of today's orders.`, result] })
    .catch(error => { return [500, `An internal server error occurred: ${error}`] })

}

const UpdateOrder = (req: OrderUpdateRequest): Promise<any> => {

  return new Promise((resolve, reject) => {
    resolve("Updated order order.")
  })

}

const DeleteOrder = (req: OrderDeletionRequest): Promise<any> => {

  const id = mongoose.Types.ObjectId(req.id)

  return OrderModel.deleteOne({ _id: id })
    .then(result => { return [200, `Successfully deleted the order with id ${id}.`] })
    .catch(error => { return [500, `An internal server error occurred: ${error}`] })

}

export {
  CreateDineInOrder,
  CreateTakeawayOrder, 
  CreateDeliveryOrder,
  GetOrders,
  UpdateOrder,
  DeleteOrder
}