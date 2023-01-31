import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const navigate = useNavigate();
    
    const [data, setData] = useState({
        emailid: "",
        password: ""
    })

    const inputHandler = (event) => {
        const { name, value } = event.target
        setData((previousState) => ({
            ...previousState,
            [name]: value

        }))
    }

    const signinData = () => {

        axios.post("http://localhost:3001/signin", data)

            .then((response) => {
                const [admindata] = response.data.Data
                console.log(response.data.Data.length)

                if (response.data.Data.length == 1) {
                    if (admindata.designation == "Admin") {
                        navigate('/viewemployee')
                    }
                    else {
                        navigate('/useremployeelist')
                    }
                }
                else {
                    alert("Invalid Login")
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div>

            <div className="Auth-form-container">
                {/* <form className="Auth-form"> */}
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            onChange={inputHandler}
                            value={data.emailid}
                            name='emailid' />

                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            onChange={inputHandler}
                            value={data.password}
                            name='password' />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={signinData}>
                            Submit
                        </button>
                    </div>
                    {/* <p className="forgot-password text-right mt-2">
                        Forgot <a href="#">password?</a>
                    </p> */}
                </div>
                {/* </form> */}
            </div>
        </div>
    )
}

export default Signin
