"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const OrdersControllers_1 = require("../controllers/OrdersControllers");
const router = express_1.default.Router();
/* CREATE a dine-in order.
 *
 * @param Number tableNumber => The table number of the table where the guests are dining.
 * @param Number numGuests => The number of guests at the table.
 * @param ?String notes => Any notes to remember for the table.
 * @param Array<ProductSchema> cart => What the table has ordered.
 * @param ?Boolean => If the order has been paid for or not.
 */
router.post("/order/dine-in", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /* TODO: Check correctness of input */
    const [status, message] = yield OrdersControllers_1.CreateDineInOrder(req.body);
    res.status(status).json({ message: message });
}));
/* CREATE a takeaway order.
 *
 * @param CustomerSchema customer => The customer who placed the order.
 * @param ?String notes => Any notes to keep in mind for the order.
 * @param Array<ProductSchema> cart => The products that have been ordered for takeaway.
 * @param Boolean paid => Whether the takeaway has been paid for or not.
 */
router.post("/order/takeaway", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /* TODO: Check correctness of input */
    const [status, message] = yield OrdersControllers_1.CreateTakeawayOrder(req.body);
    res.status(status).json({ message: message });
}));
/* CREATE a delivery order.
 *
 * @param CustomerSchema customer => The customer who placed the order.
 * @param ?String notes => Any notes to keep in mind for the order.
 * @param Array<ProductSchema> cart => The products that have been ordered for delivery.
 * @param Boolean paid => Whether the delivery has been paid for or not.
 */
router.post("/order/delivery", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /* TODO: Check correctness of input */
    const [status, message] = yield OrdersControllers_1.CreateDeliveryOrder(req.body);
    res.status(status).json({ message: message });
}));
/* READ get a list of orders, optionally filtered.
 *
 * @param ?Array<String> filters => The options to filter by.
 * Filters: ["paid", "not paid", "dine-in", "takeaway", "delivery"]
 */
router.get("/orders", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /* TODO: Check correctness of input */
    const [status, message] = yield OrdersControllers_1.GetOrders();
    res.status(status).json({ message: message });
}));
/* UPDATE an order's details.
 *
 * @param ObjectID id => The order that should have its details updated.
 * @param ?(DineInOrderSchema|TakeawayOrderSchema|DeliveryOrderSchema) order => The
 *    updated details for the order.
 */
router.put("/orders", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /* TODO: Check correctness of input */
    const [status, message] = yield OrdersControllers_1.UpdateOrder(req.body);
    res.status(status).json({ message: message });
}));
/* DELETE
 *
 * @param ObjectID id => The id of the order that should be deleted.
 */
router.delete("/orders", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /* TODO: Check correctness of input */
    const [status, message] = yield OrdersControllers_1.DeleteOrder(req.body);
    res.status(status).json({ message: message });
}));
exports.default = router;
