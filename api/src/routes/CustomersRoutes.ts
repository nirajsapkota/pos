import express from "express";
import { Request, Response } from "express";

const router = express.Router();

/* CREATE a customer.
 * 
 * @param String id => An identifier for the customer that is unique.
 * @param String name => The customer's name.
 * @param ?String address => The customer's delivery address.
 */
router.post("/customers", (req: Request, res: Response) => {
  res.send("Customers POST!");
});

/* READ get a customer's details from their id.
 *
 * @param String id => The unique ID assigned to each customer.
 */
router.get("/customers", (req: Request, res: Response) => {
  res.send("Customers GET!");
});

/* UPDATE
 *
 * @param String id => The unique ID assigned to the customer initally.
 * @param ?String newID => Update the ID associated with the customer.
 * @param ?String name =>  Update the customer's name.
 * @param ?String address => Update the customer's address.
 */
router.put("/customers", (req: Request, res: Response) => {
  res.send("Customers PUT!");
});

/* DELETE a customer from the system.
 * 
 * @param ObjectID id => ID of the customer to remove from the system.
 */
router.delete("/customers", (req: Request, res: Response) => {
  res.send("Customers DELETE!");
});

export default router;