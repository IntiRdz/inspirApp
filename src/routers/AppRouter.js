import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebase-config'
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';

import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';

import { AppScreen } from '../pages/AppScreen';
import { PatientScreen } from '../pages/PatientScreen';
import { SearchScreen } from '../pages/SearchScreen';

import { IdentiFileScreen }         from '../components/patients/systems/IdentiFileScreen';
import { CardioHemodynamicScreen }  from '../components/patients/systems/CardioHemodynamicScreen';
import { DiagnosticsScreen }        from '../components/patients/systems/DiagnosticsScreen';
import { DigestiveScreen }          from '../components/patients/systems/DigestiveScreen';
import { EvolutionScreen }          from '../components/patients/systems/EvolutionScreen';
import { HematologyScreen }         from '../components/patients/systems/HematologyScreen';
import { HistoryCurrentScreen }     from '../components/patients/systems/HistoryCurrentScreen';
import { MetabolicScreen }          from '../components/patients/systems/MetabolicScreen';
import { NeurologicalScreen }       from '../components/patients/systems/NeurologicalScreen';
import { PrescriptionScreen }       from '../components/patients/systems/PrescriptionScreen';
import { RespiratoryScreen }        from '../components/patients/systems/RespiratoryScreen';
import { TaskScreen }               from '../components/patients/systems/TaskScreen';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( async(user) => {

            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
                setIsLoggedIn( true );
                dispatch( startLoadingNotes( user.uid ) );

            } else {
                setIsLoggedIn( false );
            }

            setChecking(false);

        });
        
    }, [ dispatch, setChecking, setIsLoggedIn ])


    if ( checking ) {
        return (
            <h1>Ingresando...</h1>
        )
    }

    return (
        <Router>
            <div>
            <Switch>
                    <PublicRoute 
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated={ isLoggedIn }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/"
                        component={ AppScreen }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/patient/:patientId"
                        component={ PatientScreen }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/search"
                        component={ SearchScreen }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/patient/identifile/:patientId"
                        component={ IdentiFileScreen }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/patient/cardiohemodynamic/:patientId"
                        component={ CardioHemodynamicScreen }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/patient/diagnostics/:patientId"
                        component={ DiagnosticsScreen }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/patient/digestive/:patientId"
                        component={ DigestiveScreen }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/patient/evolution/:patientId"
                        component={ EvolutionScreen }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/patient/hematology/:patientId"
                        component={ HematologyScreen }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/patient/historycurrent/:patientId"
                        component={ HistoryCurrentScreen }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/patient/metabolic/:patientId"
                        component={ MetabolicScreen }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/patient/neurological/:patientId"
                        component={ NeurologicalScreen }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/patient/prescription/:patientId"
                        component={ PrescriptionScreen }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/patient/respiratory/:patientId"
                        component={ RespiratoryScreen }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/patient/task/:patientId"
                        component={ TaskScreen }
                    />

                    <Redirect to="/auth/login" />
                    
                </Switch>
            </div>
        </Router>
    )
}
