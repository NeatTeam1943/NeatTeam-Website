import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './jsx files/pages/Landing.jsx'
import About from './jsx files/pages/About.jsx';


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