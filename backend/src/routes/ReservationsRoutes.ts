import express from "express"

import {
  Request,
  Response
} from "express"

import {
  CreateReservation,
  GetReservations,
  UpdateReservation,
  DeleteReservation
} from "../controllers/ReservationsControllers"

const router = express.Router()

router.post("/reservations", async (req: Request, res: Response) => {

  const [status, message] = await CreateReservation(req.body)
  res.status(status).json({ message: message })

})

router.get("/reservations", async (req: Request, res: Response) => {

  const [status, message, reservations] = await GetReservations()
  res.status(status).json({ message: message, reservations: reservations })

})

router.put("/reservations", async (req: Request, res: Response) => {

  const [status, message] = await UpdateReservation(req.body)
  res.status(status).json({ message: message })

})

router.delete("/reservations", async (req: Request, res: Response) => {

  const [status, message] = await DeleteReservation(req.body)
  res.status(status).json({ message: message })

})

export default router