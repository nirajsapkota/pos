import mongoose from "mongoose"
import { CustomerModel } from "../models"

import {
  CustomerCreationRequest,
  CustomerUpdateRequest,
  CustomerDeletionRequest
} from "../typings/requests"

const CreateCustomer = (req: CustomerCreationRequest): Promise<any> => {

  const customer = new CustomerModel({
    _id: new mongoose.Types.ObjectId(),
    name: req.name
  })

  return customer.save()
    .then(result => { return [201, `Successfully created customer ${req.name}.`] })
    .catch(error => { return [500, `An internal server error occurred: ${error}.`] })

}

const GetCustomers = (): Promise<any> => {

  return CustomerModel.find()
    .then(result => { return [200, `Successfully returned a list of employees.`, result] })
    .catch(error => { return [500, `An internal server error occurred: ${error}.`] })

}

const UpdateCustomer = (req: CustomerUpdateRequest): Promise<any> => {

  const id = mongoose.Types.ObjectId(req.id)

  return CustomerModel.updateOne({ _id: id }, { $set: req })
    .then(result => { return [200, `Successfully updated the employee record identified by: ${id}.`] })
    .catch(error => { return [500, `An internal server error occurred: ${error}`] })

}

const DeleteCustomer = (req: CustomerDeletionRequest): Promise<any> => {

  const id = mongoose.Types.ObjectId(req.id)

  return CustomerModel.deleteOne({ _id: id })
    .then(result => { return [200, `Successfully deleted the employee with id ${id}.`] })
    .catch(error => { return [500, `An internal server error occurred: ${error}`] })

}

export {
  CreateCustomer,
  GetCustomers, 
  UpdateCustomer,
  DeleteCustomer
}