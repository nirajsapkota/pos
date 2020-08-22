"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
/* NOTE: By default, there is only one permission group -- permission
 * group 0. The system ensures that there is always at least one employee
 * with permission group 0 applied. This employee has access to all system
 * controls and can setup other permission groups and view all system logs.
 */
/* CREATE an employee.
 *
 * @param String name => Name of the employee.
 * @param String position => The employee's role/duties/responsibilities.
 * @param Number permissionGroup => The permission group of the employee.
 */
router.post("/employees", function (req, res) {
    res.send("[POST] Create an Employee!");
});
/* READ return get a list of employees.
 *
 */
router.get("/employees", function (req, res) {
    res.send("[GET] Retreive Employee List!");
});
/* UPDATE an employee's records.
 *
 * @param ObjectID id => ID of the employee whose records should be updated.
 * @param ?String name => Name of the employee.
 * @param ?String position => The employee's role/duties/responsibilities.
 * @param ?Number permissionGroup => The permission group of the employee.
 */
router.put("/employees", function (req, res) {
    res.send("[PUT] Update Employee Record!");
});
/* DELETE an employee from the system.
 *
 * @param ObjectID id => ID of the employee to remove from the system.
 */
router.delete("/employees", function (req, res) {
    res.send("[DELETE] Employee Delete!");
});
exports.default = router;
