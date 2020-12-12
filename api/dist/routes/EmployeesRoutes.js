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
const EmployeesControllers_1 = require("../controllers/EmployeesControllers");
const router = express_1.default.Router();
/* NOTE: By default, there is only one permission group -- permission
 * group 0. The system ensures that there is always at least one employee
 * with permission group 0 applied. This employee has access to all system
 * controls and can setup other permission groups and view all system logs.
 */
/* CREATE an employee.
 *
 * @param String name => Name of the employee.
 * @param String position => The employee's role/duties/responsibilities.
 * @param String mail => The employee's contact email.
 * @param String contactNumber => The employee's contact phone number.
 * @param String status => Full-time, part-time or casual status.
 * @param Number permissionGroup => The permission group of the employee.
 */
router.post("/employees", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /* TODO: Check correctness of input */
    const [status, message] = yield EmployeesControllers_1.CreateEmployee(req.body);
    res.status(status).json({ message: message });
}));
/* READ return get a list of employees.
 *
 * @param ?Array<String> filters => The options to filter by.
 */
router.get("/employees", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [status, message, employees] = yield EmployeesControllers_1.GetEmployees();
    res.status(status).json({ message: message, employees: employees });
}));
/* UPDATE an employee's records.
 *
 * @param ObjectID id => ID of the employee whose records should be updated.
 * @param ?String name => Name of the employee.
 * @param ?String position => The employee's role/duties/responsibilities.
 * @param ?String mail => The employee's contact email.
 * @param ?String contactNumber => The employee's contact phone number.
 * @param ?String status => Full-time, part-time or casual status.
 * @param ?Number permissionGroup => The permission group of the employee.
 */
router.put("/employees", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /* TODO: Check correctness of input */
    const [status, message] = yield EmployeesControllers_1.UpdateEmployee(req.body);
    res.status(status).json({ message: message });
}));
/* DELETE an employee from the system.
 *
 * @param ObjectID id => ID of the employee to remove from the system.
 */
router.delete("/employees", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /* TODO: Check correctness of input */
    const [status, message] = yield EmployeesControllers_1.DeleteEmployee(req.body);
    res.status(status).json({ message: message });
}));
exports.default = router;
