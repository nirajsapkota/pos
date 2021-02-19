import express from "express"
import mongoose from "mongoose"
import cors from "cors"

import {
  CustomersRoutes,
  EmployeesRoutes,
  MenuRoutes,
  OrdersRoutes,
  ReservationRoutes
} from "./routes"

import {
  PORT
} from "./config/constants"

/* Express configuration */
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

/* Register routes */
app.use("/", CustomersRoutes)
app.use("/", EmployeesRoutes)
app.use("/", MenuRoutes)
app.use("/", OrdersRoutes)
app.use("/", ReservationRoutes)

/* Database configuration */
mongoose.connect("mongodb://127.0.0.1:27017/pos", {
  useNewUrlParser: true, useUnifiedTopology: true
})
.then(result => { console.log("Connection with MongoDB was successful!") })
.catch(error => { console.log(`Failed to connect to MongoDB database: ${error.reason}!`)})

/* Express listen */
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}!`);
})