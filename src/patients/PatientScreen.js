import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

import { IdentiFile } from './systems/IdentiFile';
import { Diagnostics } from './systems/Diagnostics';
import { HistoryCurrent } from './systems/HistoryCurrent';
import { Evolution } from './systems/Evolution';
import { Prescription } from './systems/Prescription';
import { Task } from './systems/Task';
import { Neurological } from './systems/Neurological';
import { CardioHemodynamic } from './systems/CardioHemodynamic';
import { Respiratory } from './systems/Respiratory';
import { Metabolic } from './systems/Metabolic';
import { Digestive } from './systems/Digestive';
import { Hematology } from './systems/Hematology';

export const PatientScreen = ({ history }) => {

    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroById( heroeId ), [ heroeId ]);


    if ( !hero ) {
        return <Redirect to="/" />;
    }

    const handleReturn = () => {

        if( history.length <=2 ) {
            history.push('/');
        } else {
            history.goBack();
        }

    }

    return (

            <main className="grid-cards animate__animated animate__fadeIn">
                <div className="cards cards-1">
                    <IdentiFile />
                </div>
                <div className="cards cards-2">
                    <Diagnostics />
                </div>
                <div className="cards cards-3">
                    <HistoryCurrent />
                </div>
                <div className="cards cards-4">
                    <Task />
                </div>
                <div className="cards cards-5">
                    <Prescription />
                </div>
                <div className="cards cards-6">
                    <Evolution />
                </div>
                <div className="cards cards-7">
                    <Neurological />
                </div>
                <div className="cards cards-8">
                    <CardioHemodynamic />
                </div>
                <div className="cards cards-9">
                    <Respiratory />
                </div>
                <div className="cards cards-10">
                    <Metabolic />
                </div>
                <div className="cards cards-11">
                    <Digestive />
                </div>
                <div className="cards cards-12">
                    <Hematology />
                </div>
            </main>

            
    )
}
