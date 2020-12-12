"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEmployee = exports.UpdateEmployee = exports.GetEmployees = exports.CreateEmployee = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const EmployeeModel_1 = __importDefault(require("../models/EmployeeModel"));
const CreateEmployee = (req) => {
    const employee = new EmployeeModel_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        name: req.name,
        position: req.position,
        mail: req.mail,
        contactNumber: req.contactNumber,
        status: req.status,
        permissionGroup: req.permissionGroup
    });
    return employee.save()
        .then(result => {
        return [201, `Successfully created employee ${req.name}.`];
    })
        .catch(error => {
        return [500, `An internal server error occurred: ${error}.`];
    });
};
exports.CreateEmployee = CreateEmployee;
const GetEmployees = () => {
    return EmployeeModel_1.default.find()
        .then(result => {
        return [200, `Successfully returned a list of employees.`, result];
    })
        .catch(error => {
        return [500, `An internal server error occurred: ${error}`];
    });
};
exports.GetEmployees = GetEmployees;
const UpdateEmployee = (req) => {
    const id = mongoose_1.default.Types.ObjectId(req.id);
    return EmployeeModel_1.default.updateOne({ _id: id }, { $set: req })
        .then(result => {
        return [200, `Successfully updated the employee record identified by: ${id}.`];
    })
        .catch(error => {
        return [500, `An internal server error occurred: ${error}`];
    });
};
exports.UpdateEmployee = UpdateEmployee;
const DeleteEmployee = (req) => {
    const id = mongoose_1.default.Types.ObjectId(req.id);
    return EmployeeModel_1.default.deleteOne({ _id: id })
        .then(result => {
        return [200, `Successfully deleted the employee with id ${id}.`];
    })
        .catch(error => {
        return [500, `An internal server error occurred: ${error}`];
    });
};
exports.DeleteEmployee = DeleteEmployee;
