import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const btnSignout = () => {
        navigate("/")
    }
    
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand">Employee</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <form class="d-flex" role="search">
                        <button class="btn btn-outline-success" type="submit" onClick={btnSignout}>Sign out</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
