import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { startLogout } from '../../actions/auth';
import ImgProfile from '../../assets/img/ImgProfile';
import { SidebarData } from './SidebarData';




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
                    <ImgProfile />
                    <h5 class="text-light">
                        <a href="index.html">
                        <i class="bi bi-person-circle"></i>
                        <span> Dr. { name }</span>
                        </a>
                    </h5>
                    <h6>Médico Especialista en Neumología</h6>
                    <div className="social-links mt-3 text-center">
                    <a href="#" className="twitter"><i className="fab fa-accusoft"></i></a>
                    <a href="#" className="facebook"><i className="bi bi-activity"></i></a>
                    <a href="#" className="instagram"><i className="bi bi-speedometer"></i></a>
                    <a href="#" className="google-plus"><i className="bi bi-activity"></i></a>
                    <a href="#" className="linkedin"><i class="fas fa-heartbeat"></i></a>
                    </div>
                </div>
                <hr clasName="linesidebar" />
                <nav id="navbar" className="nav-menu navbar">
                    <ul>
{/*                 <li><a href="#hero" className="nav-link scrollto active"><i class="bi bi-search"></i><span>Buscar Paciente</span></a></li>
                    <li><a href="#hero" className="nav-link scrollto active"><i class="bi bi-house-door"></i> <span>Home</span></a></li>
                    <li><a href="#about" className="nav-link scrollto"><i class="bi bi-person-bounding-box"></i><span>About</span></a></li>
                    <li><a href="#resume" className="nav-link scrollto"><i class="bi bi-file-earmark-bar-graph"></i><span>Resume</span></a></li>
                    <li><a href="#portfolio" className="nav-link scrollto"><i class="bi bi-journal-medical"></i><span>Portfolio</span></a></li>
                    <li><a href="#services" className="nav-link scrollto"><i class="bi bi-hdd-stack"></i><span>Services</span></a></li>
                    <li><a href="#contact" className="nav-link scrollto"><i class="bi bi-envelope"></i><span>Contact</span></a></li> 
*/}
                    { SidebarData.map ((item, index) => {
                        return (
                            <li key = { index } className = { item.cName }>
                                <Link to = { item.path }>
                                    { item.icon }
                                    <span> { item.title } </span>
                                </Link>
                            </li>
                        )
                    })}
                    </ul>
                    
{/* .nav-menu */}
                </nav>
                <hr clasName="linesidebar" />
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={ hanleLogout }
                >
                    Cerrar Sesión
                </button>
                </div>
            </header>
{/* End Header */}




        </>
    )
}
