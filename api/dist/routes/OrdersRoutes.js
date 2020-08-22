"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
/* CREATE
 */
router.post("/orders", function (req, res) {
    res.send("Orders POST!");
});
/* READ
 */
router.get("/orders", function (req, res) {
    res.send("Orders GET!");
});
/* UPDATE
 */
router.put("/orders", function (req, res) {
    res.send("Orders PUT!");
});
/* DELETE
 */
router.delete("/orders", function (req, res) {
    res.send("Orders DELETE!");
});
exports.default = router;
