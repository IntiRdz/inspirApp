import { patients } from '../data/patients';


export const getPatientsByName = ( name = '' ) => {

    if ( name === '' ) {
        return [];
    }

    name = name.toLocaleLowerCase();
    return patients.filter( patient => patient.pacNom.toLocaleLowerCase().includes( name )  );

}