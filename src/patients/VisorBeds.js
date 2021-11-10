import React, { useMemo } from 'react';
import { getHeroesByStatus } from '../../selectors/getHeroesByStatus';
import { PatientCard } from './PatientCard';

export const VisorBeds = ({ status }) => {

    const heroes = useMemo(() => getHeroesByStatus( status ), [ status ] );

    return (
        <>
            {/* <div className="card-group animate__animated animate__fadeIn"> */}
            <div className="beds">
            {
                heroes.map( hero => (
                    <PatientCard 
                            key={ hero.id }
                            { ...hero }
                        />
                    
                ))
            } 
            </div>
        </>
    )
}
