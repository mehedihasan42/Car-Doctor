import React from 'react';
import NavBar from '../../Pages/Home/Shared/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Home/Shared/Footer';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;