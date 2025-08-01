import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './jsx files/Layout.jsx';
import './css files/App.css';
import Landing from './jsx files/pages/Landing.jsx'
import AboutTeam from './jsx files/pages/AboutTeam.jsx';
import AboutFirst from './jsx files/pages/AboutFirst.jsx';
import NotFound from './jsx files/pages/NotFound.jsx';
import Calendar from './jsx files/pages/Calendar.jsx';
import Posts from './jsx files/pages/Posts.jsx';
import Sponsors from './jsx files/pages/Sponsors.jsx';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/about/team" element={<AboutTeam />} />
                    <Route path="/about/first" element={<AboutFirst />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/sponsors" element={<Sponsors />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;