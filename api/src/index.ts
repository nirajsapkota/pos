import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import MenuRoutes from "./routes/MenuRoutes";
import EmployeeRoutes from "./routes/EmployeesRoutes";
import OrderRoutes from "./routes/OrdersRoutes";
import ReservationsRoutes from "./routes/ReservationsRoutes";
import CustomersRoutes from "./routes/CustomersRoutes";

import { PORT } from "./config/constants";

/* Express configuration */
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/* Register routes */
app.use("/", MenuRoutes);
app.use("/", EmployeeRoutes);
app.use("/", OrderRoutes);
app.use("/", ReservationsRoutes);
app.use("/", CustomersRoutes);

/* Database configuration */
mongoose.connect("mongodb://127.0.0.1:27017/pos", {
    useNewUrlParser: true, useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Connection with MongoDB was successful");
})

/* Express listen */
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});