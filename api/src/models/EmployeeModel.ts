import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  position: String,
  permissionGroup: Number
});

export default mongoose.model("Employee", EmployeeSchema);