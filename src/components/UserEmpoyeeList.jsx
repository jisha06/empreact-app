import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';


const UserEmpoyeeList = () => {
    const [empdata, setData] = useState([])
   
    useEffect(() => {
        loadEmployee();
    }, [])

    const loadEmployee = () => {
        axios.get('http://localhost:3001/viewemployee')
            .then(
                (res) => {
                    console.log(res.data)
                    setData(res.data)
                }
            ).catch((error) => {
                console.log(error)
            })
    }
    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className="py-4">
                    <h3 class="mb-3 text-center">Employee Details</h3>

                    <table class="table border shadow">
                        <thead class="thead-primary">
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Name</th>
                                <th scope="col">Email Id</th>
                                <th scope="col">Location</th>
                                <th scope="col">Designation</th>

                            </tr>
                        </thead>
                        <tbody>
                            {empdata.map((value, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{value.name}</td>
                                    <td>{value.emailid}</td>
                                    <td>{value.location}</td>
                                    <td>{value.designation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserEmpoyeeList
