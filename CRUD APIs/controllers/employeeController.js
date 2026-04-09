const express = require("express")


const Employee = require("../models/Employee.js")


const createEmployee = async(req,res)=>{
    try{
        const {name,email,phone,city} = req.body

        const newEmployee = new Employee({
            name,
            email,
            phone,
            city
        })

        await newEmployee.save()

        res.status(201).json({"message" : "Employee Created Successfully",data : req.body})

    }catch(error){
        console.log(error)
        res.status(500).json({"message": "error in Employee Creation "})

    }

}


const getEmployees = async(req,res)=>{
    console.log(req.query);
    try{
        const employees = await Employee.find()
        res.status(200).json({"message": "Fetch all employees successfully",data : employees})

    }catch(error){
        console.log(error);
        res.status(500).json({"message" : "Error in get Employees"})

    }
   
}

const singleEmployee = async(req,res)=>{
    try{
        const employee = await Employee.findById(req.params.id)
        if(!employee){
            return res.status(404).json({"message" : "Employee not Found"})
        }

        res.status(200).json({"message": "Fetch all employees successfully",data : employee})


    }catch(error){

        console.log(error);
        res.status(500).json({"message" : "Error in get Employees"})

    }
}

const updateEmployee = async(req,res)=>{
    try{
        const {name,email,phone,city} = req.body
        const update = await Employee.findByIdAndUpdate(
            req.params.id,
            {name,email,phone,city}
        
        )

        if(!update){
            return res.status(404).json({"message" : "Employee not Found"}) 
        }
       
       
        res.status(200).json({"message": "Update employees successfully",data :update })


    }catch(error){

        console.log(error);
        res.status(500).json({"message" : "Error in updates Employees"})

    }

}


const deleteEmployee = async(req,res)=>{
    try{

        const deleteEmp = await Employee.findByIdAndDelete(req.params.id)
        res.staus(204).json({"message": "Employee Deleted Successfylly" })

    }catch(error){

        console.log(error);
        res.status(500).json({"message" : "Error in delete Employees"})

    }

}



module.exports = {createEmployee,getEmployees,singleEmployee,updateEmployee,deleteEmployee}  