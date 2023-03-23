import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ShowroomPage from '../pages/ShowroomPage';

function AppRouter() {
    return (
    <BrowserRouter>
        
        <Routes>
            
            <Route path='/showroom' element={
                <ShowroomPage/>
            } />
            
        </Routes>
            
    </BrowserRouter>
    )
    
}

export default AppRouter