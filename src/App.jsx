import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './jsx files/pages/Landing.jsx'
import About from './jsx files/pages/About.jsx';
import Koren2025 from './jsx files/pages/Robots/koren2025.jsx';
import Melody2024 from './jsx files/pages/Robots/Melody2024.jsx';



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<About />} />
                <Route path="/robot/koren2025" element={<Koren2025 />} />
                <Route path='/robot/melody2024' element={<Melody2024 />} />
            </Routes>
        </Router>
    );
}

export default App;