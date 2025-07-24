import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './jsx files/Nav.jsx';
import './css files/App.css';
import Footer from './jsx files/Footer.jsx';
import Landing from './jsx files/pages/Landing.jsx'
import AboutTeam from './jsx files/pages/AboutTeam.jsx';
import AboutFirst from './jsx files/pages/AboutFirst.jsx';
import NotFound from './jsx files/pages/NotFound.jsx';
import Calendar from './jsx files/pages/Calendar.jsx';
import Posts from './jsx files/pages/Posts.jsx';


function App() {
    return (
        <Router >
            <Nav />

            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about/team" element={<AboutTeam />} />
                <Route path="/about/first" element={<AboutFirst />} />
                <Route path="/calendar" element={<Calendar />}></Route>
                <Route path="/posts" element={<Posts />}></Route>

                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;