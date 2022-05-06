import React from 'react';
import {Link} from 'react-router-dom';
function Header()
{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-danger" href="/finalproj-netflixclone/dashboard"><h1>Netflix</h1></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link text-light" aria-current="page" href="/finalproj-netflixclone/dashboard">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light" href="/finalproj-netflixclone/myaccount">My Account</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light" href="/finalproj-netflixclone/login">Logout</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;