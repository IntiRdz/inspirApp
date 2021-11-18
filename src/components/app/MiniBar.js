import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { startLogout } from '../../actions/auth';
import { SidebarData } from './SidebarData';




export const MiniBar = () => {

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
            <header id="header2">
                <div className="profile">
                    <div className="social-links mt-3 text-center">
                    { SidebarData.map ((item, index) => {
                        return (
                            <a key = { index }>
                                <Link to = { item.path }>
                                    { item.icon }
                                </Link>
                            </a>
                        )
                    })}
                    </div>
                </div>
            </header>
{/* End Header */}
       </>
    )
}
