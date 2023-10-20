import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import img from '../../assets/Images/Banner/banner3.jpeg'

const LoginLayout = () => {
    const location = useLocation();
    return (
        <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),url(${img})`, backgroundSize: "cover" }} className='flex justify-center items-center w-full h-[900px] bg-lime-200 pb-12 ' >


            <div className='w-full md:w-1/2 h-2/3  ' style={{ perspective: "1000px" }}>
                <div className='relative w-full h-full' style={{ transition: "1s", transformStyle: "preserve-3d", transform: (location.pathname === '/logLayout/register') ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
                    <Outlet></Outlet>
                </div>
            </div>
        </div >
    );
};

export default LoginLayout;