import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getPatientById } from '../selectors/getPatientById';

import { IdentiFile } from '../components/patients/systems/IdentiFile';
import { Diagnostics } from '../components/patients/systems/Diagnostics';
import { HistoryCurrent } from '../components/patients/systems/HistoryCurrent';
import { Evolution } from '../components/patients/systems/Evolution';
import { Prescription } from '../components/patients/systems/Prescription';
import { Task } from '../components/patients/systems/Task';
import { Neurological } from '../components/patients/systems/Neurological';
import { CardioHemodynamic } from '../components/patients/systems/CardioHemodynamic';
import { Respiratory } from '../components/patients/systems/Respiratory';
import { Metabolic } from '../components/patients/systems/Metabolic';
import { Digestive } from '../components/patients/systems/Digestive';
import { Hematology } from '../components/patients/systems/Hematology';
import Navbar from '../components/app/Navbar';


export const PatientScreen = ({ history }) => {

    const { patientId } = useParams();

    const patient = useMemo(() => getPatientById( patientId ), [ patientId ]);


    if ( !patient ) {
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
                <Navbar />
            </main>

            
    )
}
