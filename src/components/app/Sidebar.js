import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { startLogout } from '../../actions/auth';
import { InspiraLogo } from '../../assets/icons/InspiraLogo';

export const Sidebar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );

    const hanleLogout = () => {
        dispatch( startLogout() )
    }

    return (
        <>
{/* ======= Mobile nav toggle button ======= */}
            <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

{/* ======= Header ======= */}
            <header id="header">
                <div className="d-flex flex-column">

                <div className="profile">
                    <InspiraLogo />
                    <h1 className="text-light"><a href="index.html">Alex Smith</a></h1>
                    <div className="social-links mt-3 text-center">
                    <a href="#" className="twitter"><i className="bi bi-activity"></i></a>
                    <a href="#" className="facebook"><i className="bi bi-activity"></i></a>
                    <a href="#" className="instagram"><i className="bi bi-activity"></i></a>
                    <a href="#" className="google-plus"><i className="bi bi-activity"></i></a>
                    <a href="#" className="linkedin"><i className="bi bi-activity"></i></a>
                    </div>
                </div>

                <nav id="navbar" className="nav-menu navbar">
                    <ul>
                    <li><a href="#hero" className="nav-link scrollto active"><i className="bi bi-house-door"></i> <span>Home</span></a></li>
                    <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
                    <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                    <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                    <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
                    <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
                    </ul>
{/* .nav-menu */}
                </nav>
                </div>
            </header>
{/* End Header */}


<a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>


        </>
    )
}
