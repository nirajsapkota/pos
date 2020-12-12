"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMenuGroup = exports.UpdateMenuGroups = exports.GetMenuGroups = exports.RemoveProductFromMenuGroup = exports.AddProductToMenuGroup = exports.CreateMenuGroup = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MenuGroupModel_1 = __importDefault(require("../models/MenuGroupModel"));
const ProductModel_1 = __importDefault(require("../models/ProductModel"));
;
;
;
;
;
const CreateMenuGroup = (req) => {
    const group = new MenuGroupModel_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        name: req.name,
        products: []
    });
    return group.save()
        .then(result => {
        return [201, `Successfully created menu group ${req.name}.`];
    })
        .catch(error => {
        return [500, `An internal server error occurred: ${error}`];
    });
};
exports.CreateMenuGroup = CreateMenuGroup;
const AddProductToMenuGroup = (req) => {
    const product = new ProductModel_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        name: req.name,
        price: req.price
    });
    const id = mongoose_1.default.Types.ObjectId(req.id);
    return MenuGroupModel_1.default.updateOne({ _id: id }, { $push: { products: product } })
        .then(result => {
        return [200, `Successfully added the product ${req.name} to the menu group identified by ${id}`];
    })
        .catch(error => {
        return [500, `An internal server error occurred: ${error}`];
    });
};
exports.AddProductToMenuGroup = AddProductToMenuGroup;
const RemoveProductFromMenuGroup = (req) => {
    const m_id = mongoose_1.default.Types.ObjectId(req.menuGroupID);
    const p_id = mongoose_1.default.Types.ObjectId(req.productID);
    return MenuGroupModel_1.default.updateOne({ _id: m_id }, { $pull: { products: { _id: p_id } } })
        .then(result => {
        return [200, `Successfully removed the product identified by ${p_id} from menu group identified by ${m_id}`];
    })
        .catch(error => {
        return [500, `An internal server error occurred: ${error}`];
    });
};
exports.RemoveProductFromMenuGroup = RemoveProductFromMenuGroup;
const GetMenuGroups = () => {
    return MenuGroupModel_1.default.find()
        .then(result => {
        return [200, `Successfully returned a list of menu groups.`, result];
    })
        .catch(error => {
        return [500, `An internal server error occurred: ${error}`];
    });
};
exports.GetMenuGroups = GetMenuGroups;
const UpdateMenuGroups = (req) => {
    const id = mongoose_1.default.Types.ObjectId(req.id);
    return MenuGroupModel_1.default.updateOne({ _id: id }, { $set: req })
        .then(result => {
        return [200, `Successfully updated the menu group identified by: ${id}.`];
    })
        .catch(error => {
        return [500, `An internal server error occurred: ${error}`];
    });
};
exports.UpdateMenuGroups = UpdateMenuGroups;
const DeleteMenuGroup = (req) => {
    const id = mongoose_1.default.Types.ObjectId(req.id);
    return MenuGroupModel_1.default.deleteOne({ _id: id })
        .then(result => {
        return [200, `Successfully deleted the menu group with id ${id}.`];
    })
        .catch(error => {
        return [500, `An internal server error occurred: ${error}`];
    });
};
exports.DeleteMenuGroup = DeleteMenuGroup;
