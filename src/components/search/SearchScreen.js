import React, { useMemo } from 'react';
import queryString from 'query-string';
import { PatientCard } from '../patients/PatientCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getPatientsByName } from '../../selectors/getPatientsByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );

    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });
    const { searchText } = formValues;
    
    const heroesFiltered = useMemo(() => getPatientsByName( q ), [q])


    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            
            <div className="row">
                
                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Buscando...
                        </button>
                    </form>


                </div>


                <div className="col-7">

                    <h4> Resultados </h4>
                    <hr />

                    { 
                        (q ==='') 
                            && 
                            <div className="alert alert-info">
                                Buscar un paciente 
                            </div>
                    }

                    { 
                        (q !=='' && heroesFiltered.length === 0 ) 
                            && 
                            <div className="alert alert-danger">
                                No hay registro de paciente con  { q }
                            </div>
                    }

                    {
                        heroesFiltered.map( patient => (
                            <PatientCard 
                                key={ patient.id }
                                { ...patient }
                            />
                        ))
                    }

                </div>

            </div>


        </div>
    )
}
