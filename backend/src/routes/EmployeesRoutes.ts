/* NOTE: By default, there is only one permission group -- permission
 * group 0. The system ensures that there is always at least one employee
 * with permission group 0 applied. This employee has access to all system
 * controls and can setup other permission groups and view all system logs.
 */

import express from "express"

import {
  Request,
  Response
} from "express"

import {
  CreateEmployee,
  GetEmployees,
  UpdateEmployee,
  DeleteEmployee
} from "../controllers/EmployeesControllers"

const router = express.Router()

router.post("/employees", async (req: Request, res: Response) => {

  const [status, message] = await CreateEmployee(req.body)
  res.status(status).json({ message: message })

})

router.get("/employees", async (req: Request, res: Response) => {
  
  const [status, message, employees] = await GetEmployees()
  res.status(status).json({ message: message, employees: employees })

})

router.put("/employees",  async (req: Request, res: Response) => {
  
  const [status, message] = await UpdateEmployee(req.body)
  res.status(status).json({ message: message })

})

router.delete("/employees", async (req: Request, res: Response) => {

  const [status, message] = await DeleteEmployee(req.body)
  res.status(status).json({ message: message })

})

export default router