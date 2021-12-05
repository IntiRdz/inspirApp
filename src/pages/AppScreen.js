import React from 'react';
import Navbar from '../components/app/Navbar';
import { VisorBeds } from '../components/patients/VisorBeds';

export const AppScreen = () => {
    return (
        <main id="main">
            <section className="inner-page animate__animated animate__fadeIn animate__faster">
                <h1 className="visor-title">Pacientes Hospitalizados actualmente</h1>
                <div className="beds-container">
                    <VisorBeds status="Hospitalizado" />
                </div>
                <Navbar />
            </section>
        </main>  
    )
}
