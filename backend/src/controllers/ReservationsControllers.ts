import mongoose from "mongoose"
import { ReservationModel } from "../models"

import {
  ReservationCreationRequest,
  ReservationUpdateRequest,
  ReservationDeletionRequest
} from "../typings/requests"

const CreateReservation = (req: ReservationCreationRequest): Promise<any> => {

  const reservation = new ReservationModel({
    _id: new mongoose.Types.ObjectId(),
    table: req.table,
    name: req.name,
    contact: req.contact,
    numGuests: req.numGuests,
    arrival: req.arrival,
    notes: req.notes
  })

  return reservation.save()
    .then(result => { return [201, `Successfully created reservation ${reservation._id}.`] })
    .catch(error => { return [500, `An internal server error occurred: ${error}`] })

}

const GetReservations = (): Promise<any> => {

  return ReservationModel.find()
    .then(result => { return [200, `Successfully returned a list of today's reservations.`, result] })
    .catch(error => { return [500, `An internal server error occurred: ${error}`] })

}

const UpdateReservation = (req: ReservationUpdateRequest): Promise<any> => {

  const id = mongoose.Types.ObjectId(req.id)

  return ReservationModel.updateOne({ _id: id }, { $set: req })
    .then(result => { return [200, `Successfully updated the reservation record identified by: ${id}.`] })
    .catch(error => { return [500, `An internal server error occurred: ${error}`] })

}

const DeleteReservation = (req: ReservationDeletionRequest): Promise<any> => {

  const id = mongoose.Types.ObjectId(req.id)

  return ReservationModel.deleteOne({ _id: id })
    .then(result => { return [200, `Successfully deleted the reservation with id ${id}.`] })
    .catch(error => { return [500, `An internal server error occurred: ${error}`] })

}

export {
  CreateReservation,
  GetReservations,
  UpdateReservation,
  DeleteReservation
}