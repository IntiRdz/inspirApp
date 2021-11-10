import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getPatientById } from '../../../selectors/getPatientById';
import { Link } from 'react-router-dom';
import { Brain } from '../../../assets/icons/Brain';

export const Neurological = ( ) => {

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
        pacExpediente,
        cama
    } = patient;
    
    return (
        <>
        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={ `./neurological/${ id }` }>
            <div className="cardsystem">
                    <Brain fill='white'/>
                    <div className="row card__name">
                        <div className="col-10 card__text">
                        <h1 className="name__text">Neurológico</h1>
                        </div>
                        <div className="col-2 identifier">
                            {cama }
                        </div>
                            </div>
                    <div className="card__body">
                        <p className="title__text">
                        I received a .
                        </p>
                        <p className="description__text">
                        “ I was an EMT "
                        </p>
                    </div>
                </div>
        </Link>
        </>
    )
}