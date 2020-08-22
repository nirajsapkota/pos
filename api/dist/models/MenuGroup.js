"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Product_1 = __importDefault(require("./Product"));
var MenuGroupSchema = new mongoose_1.default.Schema({
    _id: mongoose_1.default.Schema.Types.ObjectId,
    name: String,
    products: [Product_1.default]
});
exports.default = mongoose_1.default.model('MenuGroup', MenuGroupSchema);
