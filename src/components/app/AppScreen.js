import React from 'react';
import { Sidebar } from './Sidebar';
import { ContentBedScreen } from './ContentBedScreen';
import { Footer } from './Footer';


export const AppScreen = () => {
   
    return (
        <>
            <Sidebar />
            <ContentBedScreen />
            <Footer />
            <div className="back-to-top d-flex"> Gola</div>

        </>
    )
}
