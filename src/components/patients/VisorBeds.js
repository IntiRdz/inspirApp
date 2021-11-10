import React, { useMemo } from 'react';
import { getPatientsByStatus } from '../../selectors/getPatientsByStatus';
import { PatientCard } from './PatientCard';

export const VisorBeds = ({ status }) => {

    const patients = useMemo(() => getPatientsByStatus( status ), [ status ] );

    return (
        <>
            {/* <div className="card-group animate__animated animate__fadeIn"> */}
            <div className="beds">
            {
                patients.map( patient => (
                    <PatientCard 
                            key={ patient.id }
                            { ...patient }
                        />
                    
                ))
            } 
            </div>
        </>
    )
}
