import express from "express";

interface DineInOrderCreationRequest {
  tableNumber: number,
  numGuests: number,
  notes: string,
  cart: [any]
};

interface TakeawayOrderCreationRequest {

};

interface DeliveryOrderCreationRequest {

};

interface UpdateOrderRequest {

};

interface OrderDeletionRequest {

};

const CreateDineInOrder = (req: DineInOrderCreationRequest): Promise<any> => {
  return Promise.resolve({
    message: "temporary"
  });
};

const CreateTakeawayOrder = (req: TakeawayOrderCreationRequest): Promise<any> => {
  return Promise.resolve({
    message: "temporary"
  });
};

const CreateDeliveryOrder = (req: DeliveryOrderCreationRequest): Promise<any> => {
  return Promise.resolve({
    message: "temporary"
  });
};

const GetOrders = (): Promise<any> => {
  return Promise.resolve({
    message: "temporary"
  });
};

const UpdateOrder = (req: UpdateOrderRequest): Promise<any> => {
  return Promise.resolve({
    message: "temporary"
  });
};

const DeleteOrder = (req: OrderDeletionRequest): Promise<any> => {
  return Promise.resolve({
    message: "temporary"
  });
};

export {
  CreateDineInOrder,
  CreateTakeawayOrder, 
  CreateDeliveryOrder,
  GetOrders,
  UpdateOrder,
  DeleteOrder
};