import mongoose from "mongoose"
import { EmployeeModel } from "../models"

import {
  EmployeeCreationRequest,
  EmployeeUpdateRequest,
  EmployeeDeletionRequest
} from "../typings/requests"

const CreateEmployee = (req: EmployeeCreationRequest): Promise<any> => {

  const employee = new EmployeeModel({
    _id: new mongoose.Types.ObjectId(),
    name: req.name,
    position: req.position,
    email: req.email,
    contact: req.contact,
  })

  return employee.save()
    .then(result => { return [201, `Successfully created employee ${req.name}.`] })
    .catch(error => { return [500, `An internal server error occurred: ${error}.`] })

}

const GetEmployees = (): Promise<any> => {

  return EmployeeModel.find()
    .then(result => { return [200, `Successfully returned a list of employees.`, result] })
    .catch(error => { return [500, `An internal server error occurred: ${error}`] })

}

const UpdateEmployee = (req: EmployeeUpdateRequest): Promise<any> => {

  const id = mongoose.Types.ObjectId(req.id)

  return EmployeeModel.updateOne({ _id: id }, { $set: req })
    .then(result => { return [200, `Successfully updated the employee record identified by: ${id}.`] })
    .catch(error => { return [500, `An internal server error occurred: ${error}`] })

}

const DeleteEmployee = (req: EmployeeDeletionRequest): Promise<any> => {

  const id = mongoose.Types.ObjectId(req.id)

  return EmployeeModel.deleteOne({ _id: id })
    .then(result => { return [200, `Successfully deleted the employee with id ${id}.`] })
    .catch(error => { return [500, `An internal server error occurred: ${error}`] })

}

export {
  CreateEmployee,
  GetEmployees,
  UpdateEmployee,
  DeleteEmployee
}