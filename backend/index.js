const Express = require("express");
const Bodyparser = require("body-parser");
const Cors = require("cors");
const Mongoose = require("mongoose");
const EmployeeModel = require("./modles/Employee");


const app = new Express();
app.use(Bodyparser.json());
app.use(Bodyparser.urlencoded({ extended: true }))
app.use(Cors());

Mongoose.connect("mongodb+srv://jisha:jisha@cluster0.a2wdl3u.mongodb.net/employeeDB?retryWrites=true&w=majority", { useNewUrlParser: true })

//Sign in
app.post("/signin", async (req, res) => {
    console.log(req.body.emailid, req.body.password)
    EmployeeModel.find(
        {
            $and: [{ emailid: req.body.emailid }, { password: req.body.password }]
        }
    ).then(
        (data) => {
            console.log(data)
            res.json({ "Data": data })
        }
    ).catch(
        (error) => {
            res.json({ "status": "Error", "Error": error })
        }
    )
})

//Add Employee
app.post('/addemployee', async (req, res) => {
    const newEmployee = new EmployeeModel(req.body)
    console.log(req.body)
    await newEmployee.save((error, data) => {
        if (data) {
            res.json({ "status": "Success", "Data": data })
        }
        else {
            res.json({ "status": "error", "Error": error })
        }
    })
})

//View Employee List
app.get("/viewemployee", async (req, res) => {
    try {
        var result = await EmployeeModel.find();
        res.send(result);
    } catch (error) {
        res.status(500).send(error)
    }
})

//get employee by id
app.post("/getemployee", async (req, res) => {
    var data = req.body
    console.log(data)
    console.log(req.params.id)
    try {
        var result = await EmployeeModel.findById(data)
        res.send(result);
        console.log(result)
    } catch (error) {
        res.status(500).send(error)
    }
})

//update employee
app.put('/updateEmployee', async (req, res) => {
    let data = req.body
    console.log(data.name, data.emailid, data.location, data.designation, data.salary)

    let empid = data._id
    let uname = data.name
    let uemailid = data.emailid
    let ulocation = data.location
    let udesignation = data.designation
    let usalary = data.salary
    try {
        EmployeeModel.findOneAndUpdate({ _id: empid }, { $set: { name: uname, emailid: uemailid, location: ulocation, designation: udesignation, salary: usalary } }, { new: true }, (err, data) => {
            if (data) {
                res.json({ "status": "Success", "Data": data })
            }
            else {
                res.json({ "status": "error" })
            }
        })

    } catch (err) {
        res.send('Error')
    }

})

//delete Employee
app.delete('/deleteEmployee/:id', (req, res) => {
    var data = req.params.id;
    console.log(req.params.id)
    // console.log(data)

    EmployeeModel.findByIdAndDelete(req.params.id, (err, data) => {
        console.log(data);
        if (err) {
            res.json({ "status": "Error", "Error": err });
        }
        else {
            res.send({ "status": "Deleted", "Data": data });
        }

    })
})

app.listen(3001, () => {
    console.log("server started")
})