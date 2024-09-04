import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
// import NavbarBack from './NavbarBack';
import NavbarFooter from './NavbarFooter';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    <NavbarFooter />

    </div>
  );
};

export default MainLayout;

