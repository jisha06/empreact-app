import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from './Navbar';

const EditEmployee = () => {
    const [empdata, setData] = useState([])
    const navigate = useNavigate();
    const { empid } = useParams();
   

    const [name, namechange] = useState("");
    const [emailid, emailchange] = useState("");
    const [location, locationchange] = useState("");
    const [designation, designationchange] = useState("");
    const [salary, salarychange] = useState("");


    useEffect(() => {
        loadEmployee();
    }, [])

    const loadEmployee = () => {
       
        console.log(empid)
        axios.post('http://localhost:3001/getemployee', {"_id":empid})
            .then(
                (res) => {
                    console.log(res.data.name)
                    namechange(res.data.name)
                    emailchange(res.data.emailid)
                    locationchange(res.data.location)
                    designationchange(res.data.designation)
                    salarychange(res.data.salary)
                }
            ).catch((error) => {
                console.log(error)
            })
    }

    const updateValue = (e) => {
        e.preventDefault();
        const _id = empid
        const empdata = { _id, name, emailid, location, designation, salary };
        console.log(empdata)
        axios.put('http://localhost:3001/updateEmployee', empdata)
            .then((response) => {
                console.log(response.data.status)
                if (response.data.status == "Success") {
                    
                    alert("updated Successfuly");
                    navigate("/viewemployee")
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const backEmployee =()=>{
        navigate("/viewemployee")
    }
    
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row emp-add bg-3">
                    <h1 >Edit Employee</h1>
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="col col-sm-8 emp">
                            <form className="form-horizontal">
                                <div className="form-group">
                                    <lable className="control-label col-sm-4">Name</lable>
                                    <div className="col-sm-8">
                                        <input type="text" placeholder=''
                                            onChange={e => namechange(e.target.value)}
                                            value={name}
                                            name='name' />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <lable className="control-label col-sm-4">Email Id</lable>
                                    <div className="col-sm-8">
                                        <input type="text" placeholder=''
                                            onChange={e => emailchange(e.target.value)}
                                            value={emailid}
                                            name='emailid' />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <lable className="control-label col-sm-4">Location</lable>
                                    <div className="col-sm-8">
                                        <input type="text" placeholder=''
                                            onChange={e => locationchange(e.target.value)}
                                            value={location}
                                            name='location' />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <lable className="control-label col-sm-4">Designation</lable>
                                    <div className="col-sm-8">
                                        <input type="text" placeholder=' '
                                            onChange={e => designationchange(e.target.value)}
                                            value={designation}
                                            name='designation' />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <lable className="control-label col-sm-4">Salary</lable>
                                    <div className="col-sm-8">
                                        <input type="number" placeholder=' '
                                            onChange={e => salarychange(e.target.value)}
                                            value={salary}
                                            name='salary' />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <lable className="control-label col-sm-4">           </lable>
                                    <div className="col-sm-offset-4 col-sm-8">
                                        <button type="submit" class="btn btn-success" onClick={updateValue} >Update</button>
                                        
                                        <button type="submit" class="btn btn-success" onClick={backEmployee}>Back</button>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EditEmployee
