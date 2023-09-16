import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
  empId: { type: Number, required: true },
  empName: { type: String },
  mobile: { type: String },
  salary: { type: Number },
});

const employee = mongoose.model('employee', employeeSchema, 'employee');

export default employee;
