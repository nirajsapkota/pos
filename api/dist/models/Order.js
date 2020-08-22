"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryOrderSchema = exports.TakeawayOrderSchema = exports.DineInOrderSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var baseOptions = {
    discriminatorKey: "__type",
    collection: "orders"
};
var Base = mongoose_1.default.model('Base', new mongoose_1.default.Schema({}, baseOptions));
var DineInOrderSchema = Base.discriminator("Dine In", new mongoose_1.default.Schema({}));
exports.DineInOrderSchema = DineInOrderSchema;
var TakeawayOrderSchema = Base.discriminator("Takeaway", new mongoose_1.default.Schema({}));
exports.TakeawayOrderSchema = TakeawayOrderSchema;
var DeliveryOrderSchema = Base.discriminator("Delivery", new mongoose_1.default.Schema({}));
exports.DeliveryOrderSchema = DeliveryOrderSchema;
