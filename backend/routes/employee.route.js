import express from 'express';
import { createEmployee, getEmployees, updateEmployee, deleteEmployee } from '../controllers/employee.controller.js';
const EmployeeRouter = express.Router();

EmployeeRouter.post('/', createEmployee);
EmployeeRouter.get('/', getEmployees);
EmployeeRouter.put('/:id', updateEmployee);
EmployeeRouter.put('/delete/:id', deleteEmployee);

export default EmployeeRouter;
































