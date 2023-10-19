import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const LoginLayout = () => {
    const location = useLocation();
    return (
        <div className='flex justify-center items-center w-full h-[900px] bg-lime-200 pb-12 ' >

            <div className='w-full md:w-1/2 h-2/3  ' style={{ perspective: "1000px" }}>
                <div className='relative w-full h-full' style={{ transition: "1s", transformStyle: "preserve-3d", transform: (location.pathname === '/logLayout/register') ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
                    <Outlet></Outlet>
                </div>
            </div>
        </div >
    );
};

export default LoginLayout;