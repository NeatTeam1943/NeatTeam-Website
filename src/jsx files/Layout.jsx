import React from 'react';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import ScrollToTop from './ScrollToTop.jsx';

export default function Layout({ children }) {
    return (
        <div className="app">
            <ScrollToTop />
            <Nav />
            
            <main>
                {children}
            </main>

            <Footer />
        </div>
    );
} 