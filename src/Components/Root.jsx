import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';
import AuthProvider from '../Contexts/AuthProvider';

const Root = () => {
    return (
        <div>
            <AuthProvider>
                <Navbar></Navbar>
                <Outlet />
            </AuthProvider>
        </div>
    );
};

export default Root;