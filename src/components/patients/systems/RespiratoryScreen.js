import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getPatientById } from '../../../selectors/getPatientById';
import { Link } from 'react-router-dom';

export const RespiratoryScreen = ( ) => {

    const { patientId } = useParams();

    const patient = useMemo(() => getPatientById( patientId ), [ patientId ]);


    if ( !patient ) {
        return <Redirect to="/" />;
    }

    const {
        id,
        pacFechaRegistro,
        status,
        pacApe1,
        pacApe2,
        pacNom,
        pacEdad,
        pacFN,
        pacGen,
        religion,
        cama
    } = patient;
    
    return (
            <div className="card m-1 animate__animated animate__fadeIn h-100 w-100" style={ { minHeight: 450 }}>
                    <div className="card-header bg-primary text-white">
                        <div className="row">
                            <div div className="col-9">
                                <h5>Respiratory</h5>
                            </div>
                            <div className="col-3">
                                <i className="far fa-moon"></i>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title"> { pacNom } </h5>
                        <p className="card-text"> { pacNom } { pacApe1 } { pacApe2 }  </p>
                        <p className="card-text">
                            <small className="text-muted"> { pacFN } </small>
                        </p>
                        <p className="card-text"> { cama } </p>
                    </div>
            </div>
    )
}
