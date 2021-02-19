/* NOTE: A menu group is a classification of products. For example,
 * a menu group would be "Chicken" while "BBQ Chicken Pizza" would
 * be a product within the menu group's product list.
 */

import express from "express"

import {
  Request,
  Response
} from "express"

import {
  CreateMenuGroup,
  AddProductToMenuGroup,
  UpdateProductInMenuGroup,
  RemoveProductFromMenuGroup,
  GetMenuGroups,
  UpdateMenuGroups,
  DeleteMenuGroup
} from "../controllers/MenuControllers"

const router = express.Router()

router.post("/menu", async (req: Request, res: Response) => {

  const [status, message] = await CreateMenuGroup(req.body)
  res.status(status).json({ message: message })

})

router.post("/menu/product", async (req: Request, res: Response) => {

  const [status, message] = await AddProductToMenuGroup(req.body)
  res.status(status).json({ message: message })

})

router.put("/menu/product", async (req: Request, res: Response) => {

  const [status, message] = await UpdateProductInMenuGroup(req.body)
  res.status(status).json({ message: message })

})

router.delete("/menu/product", async (req: Request, res: Response) => {

  const [status, message] = await RemoveProductFromMenuGroup(req.body)
  res.status(status).json({ message: message })

})

router.get("/menu", async (req: Request, res: Response) => {

  const [status, message, groups] = await GetMenuGroups()
  res.status(status).json({ message: message, groups: groups })

})

router.put("/menu", async (req: Request, res: Response) => {

  const [status, message] = await UpdateMenuGroups(req.body)
  res.status(status).json({ message: message })

})

router.delete("/menu", async (req: Request, res: Response) => {

  const [status, message] = await DeleteMenuGroup(req.body)
  res.status(status).json({ message: message })

})

export default router