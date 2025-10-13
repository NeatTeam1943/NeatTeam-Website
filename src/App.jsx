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
import Koren2025 from './jsx files/pages/Robots/koren2025.jsx';
import Melody2024 from './jsx files/pages/Robots/Melody2024.jsx';
import Freddy2023 from './jsx files/pages/Robots/Freddy2023.jsx'
import Sagi2022 from './jsx files/pages/Robots/Sagi2022.jsx';
import Randall2021 from './jsx files/pages/Robots/Randall2021.jsx';
import Guido2020 from './jsx files/pages/Robots/Guido2020.jsx';
import Deoys2019 from './jsx files/pages/Robots/Deoys2019.jsx';
import Porygon2018 from './jsx files/pages/Robots/Porygon2018.jsx';
import Migraine2017 from './jsx files/pages/Robots/Migraine2017.jsx';
import Ra2016 from './jsx files/pages/Robots/Ra2016.jsx';
import Slifer20215 from './jsx files/pages/Robots/Slifer2015.jsx';
import Obelisk2014 from './jsx files/pages/Robots/Obelisk2014.jsx';
import TheBrick2012 from './jsx files/pages/Robots/TheBrick2012.jsx';
import Community from "./jsx files/pages/Community.jsx";
import SponsorUs from './jsx files/pages/SponsorUs.jsx';
import ContactUs from './jsx files/pages/ContactUs.jsx';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/robot/koren2025" element={<Koren2025 />} />
                    <Route path='/robot/melody2024' element={<Melody2024 />} />
                    <Route path='/robot/freddy2023' element={<Freddy2023 />} />
                    <Route path='/robot/sagi2022' element={<Sagi2022 />} />
                    <Route path='/robot/randall2021' element={<Randall2021 />} />
                    <Route path='/robot/guido2020' element={<Guido2020 />} />
                    <Route path='/robot/deoys2019' element={<Deoys2019 />} />
                    <Route path='/robot/porygon2018' element={<Porygon2018 />} />
                    <Route path='/robot/migraine2017' element={<Migraine2017 />} />
                    <Route path='/robot/ra2016' element={<Ra2016 />} />
                    <Route path='/robot/slifer2015' element={<Slifer20215 />} />
                    <Route path='/robot/obelisk2014' element={<Obelisk2014 />} />
                    <Route path='/robot/thebrick2012' element={<TheBrick2012 />} />
                    <Route path="/about/team" element={<AboutTeam />} />
                    <Route path="/about/first" element={<AboutFirst />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/sponsors" element={<Sponsors />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/sponsor-us" element={<SponsorUs />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;