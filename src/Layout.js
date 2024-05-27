import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';

function Layout({ children }) {
    return (
        <div>
            <Banner />
            <main>{children}</main>
        </div>
    );
}

export default Layout;