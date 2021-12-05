import React, { useMemo } from 'react';
import queryString from 'query-string';
import { PatientCard } from '../components/patients/PatientCard';
import { useForm } from '../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getPatientsByName } from '../selectors/getPatientsByName';
import Navbar from '../components/app/Navbar';


export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );

    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });
    const { searchText } = formValues;
    
    const patientsFiltered = useMemo(() => getPatientsByName( q ), [q])


    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }

    return (
        <section className="inner-page animate__animated animate__fadeIn animate__faster">
            <h1 className="visor-title">Buscar Paciente</h1>
            <div className="beds-container">
                <div className="row">       
                    <div className="col-5">
                        <h4> Busqueda</h4>
                        <hr />
                        <form onSubmit={ handleSearch }>
                            <input 
                                type="text"
                                placeholder="Introduzca el nombre del paciente"
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
                                Buscar
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
                            (q !=='' && patientsFiltered.length === 0 ) 
                                && 
                                <div className="alert alert-danger">
                                    No hay registro de pacientes con el nombre  { q }
                                </div>
                        }
                        {
                            patientsFiltered.map( patient => (
                                <PatientCard 
                                    key={ patient.id }
                                    { ...patient }
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <Navbar />
        </section>
    )
}
