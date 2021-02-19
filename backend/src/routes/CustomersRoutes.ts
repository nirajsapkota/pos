import express from "express"

import {
  Request,
  Response
} from "express"

import {
  CreateCustomer,
  DeleteCustomer,
  GetCustomers,
  UpdateCustomer
} from "../controllers/CustomersControllers"

const router = express.Router()

router.post("/customers", async (req: Request, res: Response) => {

  const [status, message] = await CreateCustomer(req.body)
  res.status(status).json({ message: message })

})

router.get("/customers", async (req: Request, res: Response) => {
  
  const [status, message, customers] = await GetCustomers()
  res.status(status).json({ message: message, customers: customers })
  
})

router.put("/customers", async (req: Request, res: Response) => {
  
  const [status, message] = await UpdateCustomer(req.body)
  res.status(status).json({ message: message })

})

router.delete("/customers", async (req: Request, res: Response) => {
  
  const [status, message] = await DeleteCustomer(req.body)
  res.status(status).json({ message: message })

})

export default router