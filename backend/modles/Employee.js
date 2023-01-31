var Mongoose = require("mongoose")
const EmployeeSchema = new Mongoose.Schema(
    {
        name: {type: String,
            required: true},
        emailid : String,
        password: String,
        location: String,
        designation: String,
        salary: Number
    }
);

const EmployeeModel = Mongoose.model("employee", EmployeeSchema);
module.exports = EmployeeModel;
