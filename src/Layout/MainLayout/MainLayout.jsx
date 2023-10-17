import React from 'react';
import Navbar from '../../Common/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='pt-24'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;