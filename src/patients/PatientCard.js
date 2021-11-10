import React from 'react';
import { Link } from 'react-router-dom';

export const PatientCard = ({
    id,
    cama,
    pacNom,
    pacApe1,
    pacApe2,
    pacGen,
    pacFN,
    pacExpediente,
    pacEdad,
    pacFechaRegistro,
}) => {

    return (
        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={ `./hero/${ id }` }>
            <div className="card animate__animated animate__fadeIn">
                <div className="card-header text-white bg-primary">
                    <div className="row">
                        <div className="col-10">
                            <h5>{ pacNom } { pacApe1 } { pacApe2 }</h5>
                        </div>
                        <div className="col-2 identifier">
                            {cama }
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <p> {pacGen} {pacEdad} años </p>
                    <p> {pacExpediente} </p>
                    <p> Ingreso: {pacFechaRegistro} DEH {pacFechaRegistro} </p>

                </div>
            </div>
        </Link>
    )

}


