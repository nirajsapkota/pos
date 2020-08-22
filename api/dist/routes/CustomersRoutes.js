"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
/* CREATE a customer.
 *
 * @param String name => The customer's name.
 */
router.post("/customers", function (req, res) {
    res.send("Customers POST!");
});
/* READ
 */
router.get("/customers", function (req, res) {
    res.send("Customers GET!");
});
/* UPDATE
 */
router.put("/customers", function (req, res) {
    res.send("Customers PUT!");
});
/* DELETE a customer from the system.
 *
 * @param ObjectID id => ID of the customer to remove from the system.
 */
router.delete("/customers", function (req, res) {
    res.send("Customers DELETE!");
});
exports.default = router;
