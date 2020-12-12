import express from "express";
import { Request, Response } from "express";
import { CreateEmployee, GetEmployees, UpdateEmployee, DeleteEmployee } from "../controllers/EmployeesControllers";

const router = express.Router();

/* NOTE: By default, there is only one permission group -- permission
 * group 0. The system ensures that there is always at least one employee
 * with permission group 0 applied. This employee has access to all system
 * controls and can setup other permission groups and view all system logs.
 */



/* CREATE an employee.
 * 
 * @param String name => Name of the employee.
 * @param String position => The employee's role/duties/responsibilities.
 * @param String mail => The employee's contact email.
 * @param String contactNumber => The employee's contact phone number.
 * @param String status => Full-time, part-time or casual status.
 * @param Number permissionGroup => The permission group of the employee.
 */
router.post("/employees", async (req: Request, res: Response) => {

  /* TODO: Check correctness of input */
  const [status, message] = await CreateEmployee(req.body);
  res.status(status).json({ message: message });

});

/* READ return get a list of employees.
 *
 * @param ?Array<String> filters => The options to filter by.
 */
router.get("/employees", async (req: Request, res: Response) => {
  
  const [status, message, employees] = await GetEmployees();
  res.status(status).json({ message: message, employees: employees });

});

/* UPDATE an employee's records.
 * 
 * @param ObjectID id => ID of the employee whose records should be updated.
 * @param ?String name => Name of the employee.
 * @param ?String position => The employee's role/duties/responsibilities.
 * @param ?String mail => The employee's contact email.
 * @param ?String contactNumber => The employee's contact phone number.
 * @param ?String status => Full-time, part-time or casual status.
 * @param ?Number permissionGroup => The permission group of the employee.
 */
router.put("/employees",  async (req: Request, res: Response) => {
  
  /* TODO: Check correctness of input */
  const [status, message] = await UpdateEmployee(req.body);
  res.status(status).json({ message: message });

});

/* DELETE an employee from the system.
 *
 * @param ObjectID id => ID of the employee to remove from the system.
 */
router.delete("/employees", async (req: Request, res: Response) => {

  /* TODO: Check correctness of input */ 
  const [status, message] = await DeleteEmployee(req.body);
  res.status(status).json({ message: message });

});

export default router;