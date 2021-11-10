import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroById } from '../../../selectors/getHeroById';
import { Link } from 'react-router-dom';
import { Kidneys } from '../../../assets/icons/Kidneys';

export const Metabolic = ( ) => {

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
        cama,
        pacExpediente
    } = hero;
    
    return (
        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={ `./metabolic/${ id }` }>
            <div className="cardsystem">
                <Kidneys fill='white'/>
                <div className="row card__name">
                    <div className="col-10 card__text">
                    <h1 className="name__text">Metabólico-Renal</h1>
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
    )
}
