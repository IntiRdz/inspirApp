import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { PatientScreen } from '../components/patients/PatientScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { AppScreen } from '../components/app/AppScreen';

export const DashboardRoutes = () => {


    return (
        <>
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/patient/:patientId" component={ PatientScreen } />
                    <Route exact path="/app" component={ AppScreen } />
                    <Route exact path="/search" component={ SearchScreen } />

                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}
