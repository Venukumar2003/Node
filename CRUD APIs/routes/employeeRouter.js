const express = require("express");

const Router = express.Router();
const employeeController = require("../controllers/employeeController.js");
const Employee = require("../models/Employee.js")



Router.post("/add-emp",employeeController.createEmployee)
Router.get("/allemp",employeeController.getEmployees)
Router.get("/oneemp/:id",employeeController.singleEmployee)
Router.put("/updateemp/:id",employeeController.updateEmployee)
Router.delete("/delete/:id",employeeController.deleteEmployee)
module.exports  = Router;