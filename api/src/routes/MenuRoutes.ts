import express from "express";
import { Request, Response } from "express";
import { CreateMenuGroup, AddProductToMenuGroup, RemoveProductFromMenuGroup, GetMenuGroups, UpdateMenuGroups, DeleteMenuGroup } from "../controllers/MenuControllers";

const router = express.Router();

/* NOTE: A menu group is a classification of products. For example,
 * a menu group would be "Chicken" while "BBQ Chicken Pizza" would
 * be a product within the menu group's product list.
 */



/* CREATE a menu group.
 *
 * @param String name => The name of the menu group.
 */
router.post("/menu", async (req: Request, res: Response) => {

  const [status, message] = await CreateMenuGroup(req.body);
  res.status(status).json({ message: message });

});

/* ADD a product to a menu group.
 *
 * @param String id => The id of the menu group to add the product to.
 * @param String name => The name of the product.
 * @param Number price => The price of the product.
 */
router.post("/menu/add-product", async (req: Request, res: Response) => {

  const [status, message] = await AddProductToMenuGroup(req.body);
  res.status(status).json({ message: message });

});

/* REMOVE a product from a menu group.
 *
 * @param String menuGroupID => The id of the menu group to remove the product from.
 * @param String productID => The id of the product to remove.
 */
router.post("/menu/remove-product", async (req: Request, res: Response) => {

  const [status, message] = await RemoveProductFromMenuGroup(req.body);
  res.status(status).json({ message: message });

});

/* READ return a list of all menu groups.
 *
 */
router.get("/menu", async (req: Request, res: Response) => {

  const [status, message, groups] = await GetMenuGroups();
  res.status(status).json({ message: message, groups: groups });

});

/* UPDATE a menu group.
 *
 * @param ObjectID id => The id of the menu group to rename.
 * @param String newName => The name you would like to give to the menu group.
 */
router.put("/menu", async (req: Request, res: Response) => {

  const [status, message] = await UpdateMenuGroups(req.body);
  res.status(status).json({ message: message });

});

/* DELETE a menu group document from the collection.
 *
 * @param ObjectID id => The id of the menu group to delete.
 */
router.delete("/menu", async (req: Request, res: Response) => {

  const [status, message] = await DeleteMenuGroup(req.body);
  res.status(status).json({ message: message });

})

export default router;