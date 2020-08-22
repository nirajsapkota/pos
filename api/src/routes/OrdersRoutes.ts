import express from "express";
import { Request, Response } from "express";

const router = express.Router();

/* CREATE a dine-in order.
 *
 * @param Number tableNumber => The table number of the table where the guests are dining.
 * @param Number numGuests => The number of guests at the table.
 * @param ?String notes => Any notes to remember for the table.
 * @param Array<ProductSchema> cart => What the table has ordered.
 * @param ?Boolean => If the order has been paid for or not.
 */
router.post("/order/dine-in", (req: Request, res: Response) => {
  res.send("Orders POST!");
});

/* CREATE a takeaway order.
 *
 * @param CustomerSchema customer => The customer who placed the order.
 * @param ?String notes => Any notes to keep in mind for the order.
 * @param Array<ProductSchema> cart => The products that have been ordered for takeaway.
 * @param Boolean paid => Whether the takeaway has been paid for or not.
 */
router.post("/order/takeaway", (req: Request, res: Response) => {
  res.send("Orders POST!");
});

/* CREATE a delivery order.
 *
 * @param CustomerSchema customer => The customer who placed the order.
 * @param ?String notes => Any notes to keep in mind for the order.
 * @param Array<ProductSchema> cart => The products that have been ordered for delivery.
 * @param Boolean paid => Whether the delivery has been paid for or not.
 */
router.post("/order/delivery", (req: Request, res: Response) => {
  res.send("Orders POST!");
});

/* READ get a list of orders, optionally filtered.
 *
 * @param ?Array<String> filters => The options to filter by.
 * Filters: ["paid", "not paid"]
 */
router.get("/orders", (req: Request, res: Response) => {
  res.send("Orders GET!");
});

/* UPDATE an order's details.
 *
 * @param ObjectID id => The order that should have its details updated.
 * @param ?(DineInOrderSchema|TakeawayOrderSchema|DeliveryOrderSchema) order => The
 *    updated details for the order.
 */
router.put("/orders", (req: Request, res: Response) => {
  res.send("Orders PUT!");
});

/* DELETE
 *
 * @param ObjectID id => The id of the order that should be deleted.
 */
router.delete("/orders", (req: Request, res: Response) => {
  res.send("Orders DELETE!");
})

export default router;