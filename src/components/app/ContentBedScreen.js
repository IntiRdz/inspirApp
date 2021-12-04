import React from 'react'
import { VisorBeds } from '../patients/VisorBeds'

export const ContentBedScreen = () => {

    return (
        <main id="main">
            <section className="inner-page animate__animated animate__fadeIn animate__faster">
            <div>
                <h1 className="visor-title">Pacientes Hospitalizados actualmente</h1>
                <div className="beds-container">
                    <VisorBeds status="Hospitalizado" />
                </div>
            </div>
            </section>
        </main>  
    )
}
