import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from "../../Nav";
import Footer from '../../Footer.jsx';
import RobotNav from '../../RobotNav.jsx'
import "../../../css files/Koren2025.css"

export default function Koren2025() {
    return (
        <body className="robot-page">
            <Nav />
            <div className='robot-nav'>
                <RobotNav />
            </div>
            <section className="robot-intro">
                <h1 className="robot-title">Year's Story</h1>
                <p className="robot-description">
                    bla bla bla bla
                </p>
            </section>

            <section className="robot-timeline">
                <h2>Year Milestones</h2>
                <ul>
                    <li><strong>2006:</strong> Team Founded</li>
                </ul>
            </section>
            <Footer />
        </body>
    );
}





