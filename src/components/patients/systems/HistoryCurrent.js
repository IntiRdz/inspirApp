import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getPatientById } from '../../../selectors/getPatientById';
import { Link } from 'react-router-dom';
import { BookMedical } from '../../../assets/icons/BookMedical';

export const HistoryCurrent = ( ) => {

    const { patientId } = useParams();

    const patient = useMemo(() => getPatientById( patientId ), [ patientId ]);


    if ( !patient ) {
        return <Redirect to="/" />;
    }

    const {
        id,
        pacFechaRegistro,
        pacExpediente,
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
        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={ `./historycurrent/${ id }` }>
            <div className="cardsystem">
                <BookMedical fill='dark'/>
                <div className="row card__name"> 
                    <div className="col-10 card__text">
                    <h1 className="name__text--black">Antecedentes y Padecimiento</h1>
                    </div>
                    <div className="col-2 identifier">
                        {cama }
                    </div>
                        </div>
                <div className="card__body">
                    <p className="title__text--black">
                    I received a .
                    </p>
                    <p className="description__text--black">
                    “ I was an EMT "
                    </p>
                </div>
            </div>
        </Link>
    )
}
