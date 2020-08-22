"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
/* CREATE
 */
router.post("/reservations", function (req, res) {
    res.send("Reservations POST!");
});
/* READ
 */
router.get("/reservations", function (req, res) {
    res.send("Reservations GET!");
});
/* UPDATE
 */
router.put("/reservations", function (req, res) {
    res.send("Reservations PUT!");
});
/* DELETE
 */
router.delete("/reservations", function (req, res) {
    res.send("Reservations DELETE!");
});
exports.default = router;
