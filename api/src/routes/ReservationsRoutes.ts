import express from "express";
import { Request, Response } from "express";

const router = express.Router();

/* CREATE a reservation.
 * 
 * @param Number tableNumber => The number of the table reserved for the customers.
 * @param String name => The name of the person who's reserving the table.
 * @param String contactNumber => The contact phone number of the person making the reservation.
 * @param Number numGuests => The number of guests that will be attending.
 * @param Date arrival => The time that the booking is being made for.
 * @param ?String notes => Any notes that should be kept in mind for the reservation.
 */
router.post("/reservations", (req: Request, res: Response) => {
  res.send("Reservations POST!");
});

/* READ return a list of reservations.
 *
 */
router.get("/reservations", (req: Request, res: Response) => {
  res.send("Reservations GET!");
});

/* UPDATE
 *
 * @param ObjectID id => The id of the reservation which should be updated.
 * @param ?Number tableNumber => The updated number of the table reserved for the customers.
 * @param ?String name => The updated name of the person who's reserving the table.
 * @param ?String contactNumber => The updated contact phone number of the person making the reservation.
 * @param ?Number numGuests => The updated number of guests that will be attending.
 * @param ?Date arrival => The updated time that the booking is being made for.
 * @param ?String notes => Any notes that should be kept in mind for the reservation.
 */
router.put("/reservations", (req: Request, res: Response) => {
  res.send("Reservations PUT!");
});

/* DELETE
 * 
 * @param ObjectID id => The id of the reservation which should be deleted.
 */
router.delete("/reservations", (req: Request, res: Response) => {
  res.send("Reservations DELETE!");
})

export default router;