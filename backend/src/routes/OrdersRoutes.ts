import express from "express"

import {
  Request,
  Response
} from "express"

import {
  CreateDineInOrder,
  CreateTakeawayOrder,
  CreateDeliveryOrder,
  GetOrders,
  UpdateOrder,
  DeleteOrder
} from "../controllers/OrdersControllers"

const router = express.Router()

router.post("/order/dine-in", async (req: Request, res: Response) => {

  const [status, message] = await CreateDineInOrder(req.body)
  res.status(status).json({ message: message })

})

router.post("/order/takeaway", async (req: Request, res: Response) => {

  const [status, message] = await CreateTakeawayOrder(req.body)
  res.status(status).json({ message: message })

})

router.post("/order/delivery", async (req: Request, res: Response) => {

  const [status, message] = await CreateDeliveryOrder(req.body)
  res.status(status).json({ message: message })

})

router.get("/orders", async (req: Request, res: Response) => {

  const [status, message] = await GetOrders()
  res.status(status).json({ message: message })

})

router.put("/orders", async (req: Request, res: Response) => {

  const [status, message] = await UpdateOrder(req.body)
  res.status(status).json({ message: message })

})

router.delete("/orders", async (req: Request, res: Response) => {

  const [status, message] = await DeleteOrder(req.body)
  res.status(status).json({ message: message })

})

export default router