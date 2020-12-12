"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ProductModel_1 = __importDefault(require("./ProductModel"));
const MenuGroupSchema = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Schema.Types.ObjectId,
    name: String,
    products: [ProductModel_1.default.schema]
});
exports.default = mongoose_1.default.model("MenuGroup", MenuGroupSchema);
