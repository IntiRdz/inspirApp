import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroById } from '../../../selectors/getHeroById';
import { Link } from 'react-router-dom';

export const EvolutionScreen = ( ) => {

    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroById( heroeId ), [ heroeId ]);


    if ( !hero ) {
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
    } = hero;
    
    return (

            <div className="card m-1 animate__animated animate__fadeIn h-100 w-100">
                    <div className="card-header bg-primary text-white">
                        <div className="row">
                            <div div className="col-9">
                                <h5>Evolution</h5>
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
