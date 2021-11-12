import React from 'react'
import { useDispatch } from 'react-redux'

import { VisorBeds } from '../patients/VisorBeds'
import { startLogout } from '../../actions/auth';

export const ContentBedScreen = () => {

    const dispatch = useDispatch();
    const hanleLogout = () => {
        dispatch( startLogout() )
    }

    return (
        <main id="main">
            <section className="inner-page">
            <div className="container animate__animated animate__fadeIn animate__faster">

                        <h1 className="visor-title">Pacientes Hospitalizados actualmente</h1>
                        <VisorBeds status="Hospitalizado" />
                        <br />
                        <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={ hanleLogout }
                        >
                            Cerrar Sesión
                        </button>
            </div>
            </section>
        </main>  
    )
}
