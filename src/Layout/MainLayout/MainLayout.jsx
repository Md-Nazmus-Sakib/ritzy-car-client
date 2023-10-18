import React from 'react';
import Navbar from '../../Common/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Common/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='pt-28'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;