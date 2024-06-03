import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import Footer from './Footer';

function Layout({ children }) {
    return (
        <div>
            <Banner />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;