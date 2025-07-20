import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './jsx files/Nav.jsx';
import './css files/App.css';
import Footer from './jsx files/Footer.jsx';
import Landing from './jsx files/pages/Landing.jsx'
import AboutTeam from './jsx files/pages/AboutTeam.jsx';
import AboutFirst from './jsx files/pages/AboutFirst.jsx';
import NotFound from './jsx files/pages/NotFound.jsx';


function App() {
    return (
        <Router >
            <div className='default'>
                
                <Nav />

                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/about/team" element={<AboutTeam />} />
                    <Route path="/about/first" element={<AboutFirst />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
                
                <Footer />
            </div>
        </Router>
    );
}

export default App;