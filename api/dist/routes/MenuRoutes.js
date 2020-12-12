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
const MenuControllers_1 = require("../controllers/MenuControllers");
const router = express_1.default.Router();
/* NOTE: A menu group is a classification of products. For example,
 * a menu group would be "Chicken" while "BBQ Chicken Pizza" would
 * be a product within the menu group's product list.
 */
/* CREATE a menu group.
 *
 * @param String name => The name of the menu group.
 */
router.post("/menu", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [status, message] = yield MenuControllers_1.CreateMenuGroup(req.body);
    res.status(status).json({ message: message });
}));
/* ADD a product to a menu group.
 *
 * @param String id => The id of the menu group to add the product to.
 * @param String name => The name of the product.
 * @param Number price => The price of the product.
 */
router.post("/menu/add-product", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [status, message] = yield MenuControllers_1.AddProductToMenuGroup(req.body);
    res.status(status).json({ message: message });
}));
/* REMOVE a product from a menu group.
 *
 * @param String menuGroupID => The id of the menu group to remove the product from.
 * @param String productID => The id of the product to remove.
 */
router.post("/menu/remove-product", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [status, message] = yield MenuControllers_1.RemoveProductFromMenuGroup(req.body);
    res.status(status).json({ message: message });
}));
/* READ return a list of all menu groups.
 *
 */
router.get("/menu", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [status, message, groups] = yield MenuControllers_1.GetMenuGroups();
    res.status(status).json({ message: message, groups: groups });
}));
/* UPDATE a menu group.
 *
 * @param ObjectID id => The id of the menu group to rename.
 * @param String newName => The name you would like to give to the menu group.
 */
router.put("/menu", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [status, message] = yield MenuControllers_1.UpdateMenuGroups(req.body);
    res.status(status).json({ message: message });
}));
/* DELETE a menu group document from the collection.
 *
 * @param ObjectID id => The id of the menu group to delete.
 */
router.delete("/menu", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [status, message] = yield MenuControllers_1.DeleteMenuGroup(req.body);
    res.status(status).json({ message: message });
}));
exports.default = router;
