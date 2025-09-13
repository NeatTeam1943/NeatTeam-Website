import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from "../../Nav";
import Footer from '../../Footer.jsx';
import RobotNav from '../../RobotNav.jsx'
import "../../../css files/Robot.css"

export default function Slifer20215() {
    return (
        <div className="robot-page">
            <RobotNav />
                <main>
                    <section className="robot-intro">
                        <h1 className="robot-title">2015 Year's Competition:</h1>
                        <p className="robot-description coming-soon">
                            We're working hard to bring you the complete story of our 2015 robot!<br/>
                            Stay tuned for competition details, robot specifications, and team achievements.<br/>
                            <strong>Coming Soon!</strong>
                        </p>
                    </section>

                    <section className="robot-timeline">
                        <h2>Year Milestones</h2>
                        <ul>
                            <li>None</li>
                        </ul>
                    </section>
                </main>
        </div>
    );
}





