import express from "express";
import { Request, Response } from "express";
import { CreateDineInOrder, CreateTakeawayOrder, CreateDeliveryOrder, GetOrders, UpdateOrder, DeleteOrder } from "../controllers/OrdersControllers";

const router = express.Router();

/* CREATE a dine-in order.
 *
 * @param Number tableNumber => The table number of the table where the guests are dining.
 * @param Number numGuests => The number of guests at the table.
 * @param ?String notes => Any notes to remember for the table.
 * @param Array<ProductSchema> cart => What the table has ordered.
 * @param ?Boolean => If the order has been paid for or not.
 */
router.post("/order/dine-in", async (req: Request, res: Response) => {

  /* TODO: Check correctness of input */
  const [status, message] = await CreateDineInOrder(req.body);
  res.status(status).json({ message: message });

});

/* CREATE a takeaway order.
 *
 * @param CustomerSchema customer => The customer who placed the order.
 * @param ?String notes => Any notes to keep in mind for the order.
 * @param Array<ProductSchema> cart => The products that have been ordered for takeaway.
 * @param Boolean paid => Whether the takeaway has been paid for or not.
 */
router.post("/order/takeaway", async (req: Request, res: Response) => {

  /* TODO: Check correctness of input */
  const [status, message] = await CreateTakeawayOrder(req.body);
  res.status(status).json({ message: message });

});

/* CREATE a delivery order.
 *
 * @param CustomerSchema customer => The customer who placed the order.
 * @param ?String notes => Any notes to keep in mind for the order.
 * @param Array<ProductSchema> cart => The products that have been ordered for delivery.
 * @param Boolean paid => Whether the delivery has been paid for or not.
 */
router.post("/order/delivery", async (req: Request, res: Response) => {

  /* TODO: Check correctness of input */
  const [status, message] = await CreateDeliveryOrder(req.body);
  res.status(status).json({ message: message });

});

/* READ get a list of orders, optionally filtered.
 *
 * @param ?Array<String> filters => The options to filter by.
 * Filters: ["paid", "not paid", "dine-in", "takeaway", "delivery"]
 */
router.get("/orders", async (req: Request, res: Response) => {

  /* TODO: Check correctness of input */
  const [status, message] = await GetOrders();
  res.status(status).json({ message: message });

});

/* UPDATE an order's details.
 *
 * @param ObjectID id => The order that should have its details updated.
 * @param ?(DineInOrderSchema|TakeawayOrderSchema|DeliveryOrderSchema) order => The
 *    updated details for the order.
 */
router.put("/orders", async (req: Request, res: Response) => {

  /* TODO: Check correctness of input */
  const [status, message] = await UpdateOrder(req.body);
  res.status(status).json({ message: message });

});

/* DELETE
 *
 * @param ObjectID id => The id of the order that should be deleted.
 */
router.delete("/orders", async (req: Request, res: Response) => {

  /* TODO: Check correctness of input */
  const [status, message] = await DeleteOrder(req.body);
  res.status(status).json({ message: message });

})

export default router;