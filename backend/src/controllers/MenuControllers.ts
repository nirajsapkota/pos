import mongoose from "mongoose"

import {
  MenuGroupModel,
  ProductModel
} from "../models"

import {
  MenuGroupCreationRequest,
  MenuGroupProductAddRequest,
  MenuGroupProductUpdateRequest,
  MenuGroupProductDeletionRequest,
  MenuGroupUpdateRequest,
  MenuGroupDeletionRequest
} from "../typings/requests"


const CreateMenuGroup = (req: MenuGroupCreationRequest): Promise<any> => {
  
  const group = new MenuGroupModel({
    _id: new mongoose.Types.ObjectId(),
    name: req.name,
    products: []
  })

  return group.save()
    .then(result => { return [201, `Successfully created menu group ${req.name}.`] })
    .catch(error => { return [500, `An internal server error occurred: ${error}`] })

}

const AddProductToMenuGroup = (req: MenuGroupProductAddRequest): Promise<any> => {

  const product = new ProductModel({
    _id: new mongoose.Types.ObjectId(),
    name: req.name,
    price: req.price
  })

  const id = mongoose.Types.ObjectId(req.id)

  return MenuGroupModel.updateOne({ _id: id }, { $push: { products: product }})
    .then(result => { return [200, `Successfully added the product ${req.name} to the menu group identified by ${id}`] })
    .catch(error => { return [500, `An internal server error occurred: ${error}`] })

}

const UpdateProductInMenuGroup = (req: MenuGroupProductUpdateRequest): Promise<any> => {

  const m_id = mongoose.Types.ObjectId(req.menuGroupID)
  const p_id = mongoose.Types.ObjectId(req.productID)
  const subdocument = { _id: req.productID, name: req.name, price: req.price }

  return MenuGroupModel.updateOne({ _id: m_id, "products._id": p_id }, { $set: { "products.$": subdocument }})
    .then(result => { return [200, `Successfully updated the product identified by ${p_id} from the menu group identified by ${m_id}`] })
    .catch(error => { return [500, `An internal server error occurred: ${error}`] })
  
}

const RemoveProductFromMenuGroup = (req: MenuGroupProductDeletionRequest): Promise<any> => {

  const m_id = mongoose.Types.ObjectId(req.menuGroupID)
  const p_id = mongoose.Types.ObjectId(req.productID)

  return MenuGroupModel.updateOne({ _id: m_id }, { $pull: { products: { _id: p_id } } })
    .then(result => { return [200, `Successfully removed the product identified by ${p_id} from menu group identified by ${m_id}`] })
    .catch(error => { return [500, `An internal server error occurred: ${error}`] })

}

const GetMenuGroups = (): Promise<any> => {

  return MenuGroupModel.find()
    .then(result => { return [200, `Successfully returned a list of menu groups.`, result] })
    .catch(error => { return [500, `An internal server error occurred: ${error}`] })

}

const UpdateMenuGroups = (req: MenuGroupUpdateRequest): Promise<any> => {

  const id = mongoose.Types.ObjectId(req.id)

  return MenuGroupModel.updateOne({ _id: id }, { $set: req })
    .then(result => { return [200, `Successfully updated the menu group identified by: ${id}.`] })
    .catch(error => { return [500, `An internal server error occurred: ${error}`] })

}

const DeleteMenuGroup = (req: MenuGroupDeletionRequest): Promise<any> => {

  const id = mongoose.Types.ObjectId(req.id)

  return MenuGroupModel.deleteOne({ _id: id })
    .then(result => { return [200, `Successfully deleted the menu group with id ${id}.`] })
    .catch(error => { return [500, `An internal server error occurred: ${error}`] })

}

export {
  CreateMenuGroup,
  AddProductToMenuGroup,
  UpdateProductInMenuGroup,
  RemoveProductFromMenuGroup,
  GetMenuGroups,
  UpdateMenuGroups,
  DeleteMenuGroup
}