import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'
//https://learncoders.xyz/react-crud-example-with-codeigniter/

const AddEmployee = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        emailid: '',
        password: '',
        location: '',
        designation: '',
        salary: 0
    })

    const inputHandler = (event) => {
        const { name, value } = event.target
        setData((previousState) => ({
            ...previousState,
            [name]: value

        }))
    }

    const readValue = () => {
        axios.post('http://localhost:3001/addemployee', data)
            .then((response) => {
                console.log(response.data)
                if (response.data.status == "Success") {
                    setData({
                        name: '',
                        emailid: '',
                        password: '',
                        location: '',
                        designation: '',
                        salary: ''
                    })                

                }
            })
            .catch((error) => {
                console.log(error)
            })
            navigate("/viewemployee")
    }

    const backEmployee = ()=>{
        navigate("/viewemployee")
    }
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row emp-add bg-3">
                    <h1 >Add Employee</h1>
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="col col-sm-8 emp">
                            <form className="form-horizontal">
                                <div className="form-group">
                                    <lable className="control-label col-sm-4">Name</lable>
                                    <div className="col-sm-8">
                                        <input type="text" placeholder=''
                                            onChange={inputHandler}
                                            value={data.name}
                                            name='name' />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <lable className="control-label col-sm-4">Email Id</lable>
                                    <div className="col-sm-8">
                                        <input type="text" placeholder=''
                                            onChange={inputHandler}
                                            value={data.emailid}
                                            name='emailid' />
                                    </div>                                    
                                </div>
                                <div className="form-group">
                                    <lable className="control-label col-sm-4">Password</lable>
                                    <div className="col-sm-8">
                                        <input type="password" placeholder=''
                                            onChange={inputHandler}
                                            value={data.password}
                                            name='password' />
                                    </div>                                    
                                </div>
                                <div className="form-group">
                                    <lable className="control-label col-sm-4">Location</lable>
                                    <div className="col-sm-8">
                                        <input type="text" placeholder=''
                                            onChange={inputHandler}
                                            value={data.location}
                                            name='location' />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <lable className="control-label col-sm-4">Designation</lable>
                                    <div className="col-sm-8">
                                        <input type="text" placeholder=' '
                                            onChange={inputHandler}
                                            value={data.designation}
                                            name='designation' />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <lable className="control-label col-sm-4">Salary</lable>
                                    <div className="col-sm-8">
                                        <input type="number" placeholder=' '
                                            onChange={inputHandler}
                                            value={data.salary}
                                            name='salary' />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <lable className="control-label col-sm-4">           </lable>
                                    <div className="col-sm-offset-4 col-sm-8">
                                        <button type="submit" class="btn btn-success" onClick={readValue} >Add</button>
                                        <button type="submit" class="btn btn-success" onClick={backEmployee} >Back</button>
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

export default AddEmployee
