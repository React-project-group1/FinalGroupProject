import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import HomePage from '../pages/HomePage';
import ShowroomPage from '../pages/ShowroomPage';
import WishlistPage from '../pages/WishlistPage';
import Auth  from './Auth';

function AppRouter() {
    return (
    <BrowserRouter>
        
        <Routes>
            
            <Route exact path='/' element={
                <HomePage/>
            } />

            <Route path='/showroom' element={
                <ShowroomPage/>
            } />

            <Route path='/sign-in' element={
                <Auth/>
            } />
            
            <Route path='/wishlist' element={
                <WishlistPage/>
            } />
        </Routes>
            
    </BrowserRouter>



    )
    
}

export default AppRouter