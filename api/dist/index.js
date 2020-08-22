"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
var MenuRoutes_1 = __importDefault(require("./routes/MenuRoutes"));
var EmployeesRoutes_1 = __importDefault(require("./routes/EmployeesRoutes"));
var OrdersRoutes_1 = __importDefault(require("./routes/OrdersRoutes"));
var ReservationsRoutes_1 = __importDefault(require("./routes/ReservationsRoutes"));
var CustomersRoutes_1 = __importDefault(require("./routes/CustomersRoutes"));
var constants_1 = require("./config/constants");
/* Express configuration */
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cors_1.default());
/* Register routes */
app.use("/", MenuRoutes_1.default);
app.use("/", EmployeesRoutes_1.default);
app.use("/", OrdersRoutes_1.default);
app.use("/", ReservationsRoutes_1.default);
app.use("/", CustomersRoutes_1.default);
/* Database configuration */
mongoose_1.default.connect("mongodb://127.0.0.1:27017/pos", {
    useNewUrlParser: true, useUnifiedTopology: true
});
var connection = mongoose_1.default.connection;
connection.once("open", function () {
    console.log("Connection with MongoDB was successful");
});
/* Express listen */
app.listen(constants_1.PORT, function () {
    console.log("Server is listening on port " + constants_1.PORT);
});
