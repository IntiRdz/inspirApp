import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroById } from '../../../selectors/getHeroById';
import moment from 'moment';
moment.locale('es-mx');

export const IdentiFileScreen = ({ history }) => {

    
    const { heroeId } = useParams();
    
    const hero = useMemo(() => getHeroById( heroeId ), [ heroeId ]);
    
    
    if ( !hero ) {
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
    } = hero;
    
    const hoy = moment ();
    const formato ='MMMM Do YYYY, h:mm a';

    const edad =hoy.diff(pacFN, 'years');

    
    return (
            <div className="card m-1 animate__animated animate__fadeIn h-100 w-100">
                    <div className="card-header bg-primary text-white pb-0">
                        <div className="row">
                            <div div className="col-8">
                                <h5>Identificación</h5>
                            </div>
                            <div className="col-2">
                                <i className="far fa-moon"></i>
                            </div>
                            <div className="col-2">
                                { cama }
                            </div>
                        </div>
                    </div>
                    <div className="card-body"><small>
                        <h6 className="card-title"><strong> { pacNom } { pacApe1 } { pacApe2 } </strong> </h6>
                        <p className="card-text m-0"><strong>Género: </strong>{ pacGen }</p>
                        <p className="card-text m-0"><strong>Edad: </strong> { edad }</p>
                        <p className="card-text m-0"><strong>Fecha de ingreso: </strong>{ pacFechaRegistro }</p>
                        <p className="card-text"><strong>DEH: </strong>{ pacFechaRegistro }</p>
                        <hr />
                        
                        <p className="card-text m-0"><strong>Religión: </strong> { religion } </p>
                        <p className="card-text m-0"><strong>Expediente: </strong> { pacExpediente } </p>
                        <p className="card-text m-0"><strong>Fecha: </strong> { hoy.format( formato ) } </p>
                        <button type="button" className="btn btn-primary">Primary</button>

                        


                    </small></div>
            </div>
    )
}
