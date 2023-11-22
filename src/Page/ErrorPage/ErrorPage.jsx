import React from 'react';
import error from '../../assets/error.png'
const ErrorPage = () => {
    return (
        <div>
            <img className='bg-cover md:h-[100vh] w-full' src={error} alt="" />
        </div>
    );
};

export default ErrorPage;
