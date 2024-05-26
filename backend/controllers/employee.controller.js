import EmployeeModel from "../models/employee.model.js";

const createEmployee = async (req, res) => {
  try {
    const { employeeName, department, position, salary, address } = req.body;
    if (!employeeName || !department || !position || !salary || !address) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const employee = new EmployeeModel({
      employeeName,
      department,
      position,
      salary,
      address,
    });
    await employee.save();
    res
      .status(201)
      .json({ message: "Employee created successfully", employee });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEmployees = async (req, res) => {
  try {
    const employeeData = await EmployeeModel.find({ deleted: false });
    res.status(200).json(employeeData);
  } catch (error) {
    res.send(500).json({ message: error.message });
  }
}


const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { employeeName, department, position, salary, address } = req.body;
    if (!employeeName || !department || !position || !salary || !address) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const employee = await EmployeeModel.findByIdAndUpdate(id, { employeeName, department, position, salary, address }, { new: true });
    res.status(200).json({ message: "Employee updated successfully", employee });
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}


const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteEmployee = await EmployeeModel.findByIdAndUpdate(id, { deleted: true });
    res.status(200).json({ message: "Employee deleted successfully", deleteEmployee });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}



export { createEmployee, getEmployees, updateEmployee, deleteEmployee };