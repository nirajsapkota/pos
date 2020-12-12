"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryOrderSchema = exports.TakeawayOrderSchema = exports.DineInOrderSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ProductModel_1 = __importDefault(require("./ProductModel"));
const CustomerModel_1 = __importDefault(require("./CustomerModel"));
const baseOptions = {
    discriminatorKey: "__type",
    collection: "orders"
};
const Base = mongoose_1.default.model('Base', new mongoose_1.default.Schema({}, baseOptions));
/* DineInOrderSchema does not have a customer as the only information
 * we would have is their name -- therefore we would be creating useless
 * customer records that can't be used again.
 */
const DineInOrderSchema = Base.discriminator("Dine In", new mongoose_1.default.Schema({
    _id: mongoose_1.default.Schema.Types.ObjectId,
    name: String,
    tableNumber: Number,
    numGuests: Number,
    notes: String,
    cart: [ProductModel_1.default],
    paid: Boolean,
    placed: Date
}));
exports.DineInOrderSchema = DineInOrderSchema;
const TakeawayOrderSchema = Base.discriminator("Takeaway", new mongoose_1.default.Schema({
    _id: mongoose_1.default.Schema.Types.ObjectId,
    customer: CustomerModel_1.default,
    notes: String,
    cart: [ProductModel_1.default],
    paid: Boolean,
    placed: Date
}));
exports.TakeawayOrderSchema = TakeawayOrderSchema;
const DeliveryOrderSchema = Base.discriminator("Delivery", new mongoose_1.default.Schema({
    _id: mongoose_1.default.Schema.Types.ObjectId,
    customer: CustomerModel_1.default,
    notes: String,
    cart: [ProductModel_1.default],
    paid: Boolean,
    placed: Date
}));
exports.DeliveryOrderSchema = DeliveryOrderSchema;
