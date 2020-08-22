import express from "express";
import { Request, Response } from "express";

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
router.post("/employees", (req: Request, res: Response) => {
  res.send("[POST] Create an Employee!");
});

/* READ return get a list of employees.
 *
 * @param ?Array<String> filters => The options to filter by.
 */
router.get("/employees", (req: Request, res: Response) => {
  res.send("[GET] Retreive Employee List!");
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
router.put("/employees", (req: Request, res: Response) => {
  res.send("[PUT] Update Employee Record!");
});

/* DELETE an employee from the system.
 *
 * @param ObjectID id => ID of the employee to remove from the system.
 */
router.delete("/employees", (req: Request, res: Response) => {
  res.send("[DELETE] Employee Delete!");
});

export default router;