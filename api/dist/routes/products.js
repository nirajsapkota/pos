"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var product_1 = __importDefault(require("../models/product"));
var router = express_1.default.Router();
/* CREATE a product and insert it into the database.
 * @param String name
 * @param Number price
 */
router.post("/products", function (req, res) {
    console.log(req.body);
    var product = new product_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product.save();
    res.status(201).json({
        message: "Handling POST request to /products"
    });
});
router.get("/products", function (req, res) {
    res.send("Hello World!");
});
router.put("/products", function (req, res) {
});
router.delete("/products", function (req, res) {
});
exports.default = router;
