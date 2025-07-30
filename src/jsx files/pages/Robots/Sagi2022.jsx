import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from "../../Nav";
import Footer from '../../Footer.jsx';
import RobotNav from '../../RobotNav.jsx'
import "../../../css files/Robot.css"

export default function Sagi2022() {
    return (
        <body className="robot-page">
            <Nav />
            <div style={{ display: 'flex', alignItems: 'flex-start', top: 20 }}>
                <RobotNav />
                <main style={{ flex: 1 }}>
                    <section className="robot-intro">
                        <h1 className="robot-title">2022 Year's Competition:</h1>
                        <p className="robot-description">
                            Rapid React - FRC 2022 <br />
                            Objective: <br />
                            Robots balls called Cargo and score them into the Hub, a central structure with two levels: <br />
                            • Lower Hub - easier to reach, fewer points. <br />
                            • Upper Hub - more difficult, more points. <br />
                            Match Structure: <br />
                            1. Autonomous Period (first 15 seconds): <br />
                            Robots follow pre-programmed commands to: <br />
                            • Score Cargo into the Hub. <br />
                            • Move out of the starting area (Taxi). <br />
                            Successful actions earn early points and can give an edge in the match. <br />
                            2. Teleoperated Period (next 2 minute and 15 seconds): <br />
                            Drivers may Collect Cargo from the field and Score them into their zones. <br />
                            If the alliance reach a total of 20 Cargo scored (with some coming from auto) they get a Ranking Point bonus. <br />
                            3. Endgame (final 30 seconds): <br />
                            Robots climb on the Hangar, a tiered set of horizontal bars: low, middle, high and traversal (higher bars are worth more points). <br />
                            Teams may also continue scoring and doing what they did in the Teleoperated Period. <br />
                        </p>
                    </section>

                    <section className='robot-image'>
                        <h1>2022 Group and Robot (Sagi)</h1>
                        <img src="../../../../public/Sagi2022.jpg" />
                    </section>

                    <section className="robot-timeline">
                        <h2>Year Milestones</h2>
                        <ul>
                            <li>District Event Winner</li>
                        </ul>
                    </section>
                </main>
            </div>
            <Footer />

        </body>
    );
}





