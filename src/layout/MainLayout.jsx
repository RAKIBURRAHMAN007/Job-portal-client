import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar';
import Footer from '../pages/Shared/Footer/Footer';
import { div } from 'framer-motion/client';

const MainLayout = () => {
    return (
        <div className=''>
            <div className='w-11/12 mx-auto min-h-screen  '>
                <NavBar></NavBar>
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;