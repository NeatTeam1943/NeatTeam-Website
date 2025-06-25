import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../src/jsx files/Landing.jsx'
import About from '../src/jsx files/About.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;