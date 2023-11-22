import React from 'react';
import Navber from '../Page/Navber/Navber';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;