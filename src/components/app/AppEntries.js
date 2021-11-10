import React from 'react'
import { useSelector } from 'react-redux';
import { AppEntry } from './AppEntry';

export const AppEntries = () => {

    const { notes } = useSelector( state => state.notes );

    return (
        <div className="journal__entries">
            
            {
                notes.map( note => (
                    <AppEntry 
                        key={ note.id }
                        { ...note }
                    />
                ))
            }

        </div>
    )
}
