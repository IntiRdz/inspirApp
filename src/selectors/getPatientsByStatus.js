import { patients } from '../data/patients';

export const getPatientsByStatus = ( status ) => {

    const validStatus = ['Hospitalizado', 'Ambulatorio'];

    if ( !validStatus.includes( status ) ) {
        throw new Error(`Status "${ status }" no es correcto`);
    }

    return patients.filter( patient => patient.status === status );

}
