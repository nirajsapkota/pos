"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/* CREATE a customer.
 *
 * @param String id => An identifier for the customer that is unique.
 * @param String name => The customer's name.
 * @param ?String address => The customer's delivery address.
 */
router.post("/customers", (req, res) => {
    res.send("Customers POST!");
});
/* READ get a customer's details from their id.
 *
 * @param String id => The unique ID assigned to each customer.
 */
router.get("/customers", (req, res) => {
    res.send("Customers GET!");
});
/* UPDATE
 *
 * @param String id => The unique ID assigned to the customer initally.
 * @param ?String newID => Update the ID associated with the customer.
 * @param ?String name =>  Update the customer's name.
 * @param ?String address => Update the customer's address.
 */
router.put("/customers", (req, res) => {
    res.send("Customers PUT!");
});
/* DELETE a customer from the system.
 *
 * @param ObjectID id => ID of the customer to remove from the system.
 */
router.delete("/customers", (req, res) => {
    res.send("Customers DELETE!");
});
exports.default = router;
