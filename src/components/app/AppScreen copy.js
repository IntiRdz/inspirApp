import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Sidebar } from './Sidebar';
import { VisorBeds } from '../patients/VisorBeds';
import { startLogout } from '../../actions/auth';

export const AppScreen = () => {
   
    const dispatch = useDispatch();
    const hanleLogout = () => {
        dispatch( startLogout() )
    }

    return (
        <div className="journal__main-content animate__animated animate__fadeIn animate__faster">

        <Sidebar />
            <main>
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

            </main>
            </div>
    )
}
