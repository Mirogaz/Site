import React from 'react';
import { Route, Routes } from 'react-router';
import Admin from './pages/Admin';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import AddCards from './pages/AddCards';
import IAB from './pages/IAB';

function AppRouting() {
    return (
        <Routes>
            <Route path='' element={<Admin />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/addcards' element={<AddCards />}/>
            <Route path='/iab' element={<IAB />}/>
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default AppRouting;