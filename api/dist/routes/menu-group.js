"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var menu_group_1 = __importDefault(require("../models/menu-group"));
var router = express_1.default.Router();
/* CREATE a catagory for a type of product, and insert it into the database.
 * For example, a catagory for "chicken" products.
 * @param String name - The name of the catagory to create.
 */
router.post("/products", function (req, res) {
    console.log(req.body);
    var group = new menu_group_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        name: req.body.name,
        products: []
    });
    group.save();
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
