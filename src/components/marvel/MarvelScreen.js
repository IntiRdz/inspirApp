import React from 'react';

import { VisorBeds } from '../patients/VisorBeds';
import Navbar from '../app/Navbar';

export const MarvelScreen = () => {

    return (
        <div 
            className="journal__main-content animate__animated animate__fadeIn animate__faster"
        >
            
            <Navbar />

            <main>
                <h1>Ambulatorio</h1>
                <VisorBeds status="Ambulatorio" />

            </main>


        </div>
    )
}
