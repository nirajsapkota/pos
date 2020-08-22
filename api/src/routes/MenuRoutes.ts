import express from "express";
import { Request, Response } from "express";

const router = express.Router();

/* NOTE: A menu group is a classification of products. For example,
 * a menu group would be "Chicken" while "BBQ Chicken Pizza" would
 * be a product within the menu group's product list.
 */



/* CREATE a menu group.
 *
 * @param String name => The name of the menu group.
 */
router.post("/menu", (req: Request, res: Response) => {
  res.send("[POST] Create a Menu Group!");
});

/* READ return a list of all menu groups.
 *
 */
router.get("/menu/groups", (req: Request, res: Response) => {
  res.send("[GET] Retreive Menu Groups!");
});

/* READ a list of all products within a menu group.
 * 
 * @param ObjectID id => The id of the menu group whose products to read.
 */
router.get("/menu/products", (req: Request, res: Response) => {
  res.send("[GET] Retreive Group Products!");
});

/* UPDATE a menu group's name.
 *
 * @param ObjectID id => The id of the menu group to rename.
 * @param String newName => The name you would like to give to the menu group.
 */
router.put("/menu/rename-group", (req: Request, res: Response) => {
  res.send("[PUT] Rename Menu Group!");
});

/* UPDATE a menu group's products -- add a product.
 * 
 * @param ObjectID id => The id of the menu group to add the product to.
 * @param Object {name: String, price: Number} product => The product to add.
 */
router.put("/menu/add-product", (req: Request, res: Response) => {
  res.send("[PUT] Menu Product Add!");
});

/* UPDATE a menu group's products -- remove a product.
 *
 * @param ObjectID id => The id of the product to remove.
 */
router.put("/menu/remove-product", (req: Request, res: Response) => {
  res.send("[PUT] Menu Product Remove!");
});

/* DELETE a menu group document from the collection.
 *
 * @param ObjectID id => The id of the menu group to delete.
 */
router.delete("/menu", (req: Request, res: Response) => {
  res.send("[DELETE] Menu Group Delete!");
})

export default router;