import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Page/Navber/Navber';

const FoodsData = () => {
    return (
        <div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default FoodsData;