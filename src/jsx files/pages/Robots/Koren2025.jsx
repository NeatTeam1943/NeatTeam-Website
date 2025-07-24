import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from "../../Nav";
import Footer from '../../Footer.jsx';
import RobotNav from '../../RobotNav.jsx'
import "../../../css files/Robot.css"


export default function Koren2025() {
    return (
        <body className="robot-page">
            <Nav />
            <div style={{ display: 'flex', alignItems: 'flex-start', top: 20 }}>
                <RobotNav />
                <main style={{ flex: 1 }}>
                    <section className="robot-intro">
                        <h1 className="robot-title">2025 Year's Competition:</h1>
                        <p className="robot-description">
                            Reefscape - FRC 2025 Game Summary <br />
                            Objective: <br />
                            Robots collect two types of game pieces: <br />
                            Coral - represented by plastic pipes <br />
                            Algae - represented by foam balls <br />
                            These items must be delivered and scored into specific zones around the field to earn points. <br />
                            Match Structure: <br />
                            1. Autonomous Period (first 15 seconds): <br />
                            Robots operate on their own to score as much as possible. <br />
                            2. Teleoperated Period (next 2 minutes and 15 seconds): <br />
                            Drivers control the robots to collect coral and algae and score them in various goals. <br />
                            3. Endgame (last 30 seconds): <br />
                            Robots try to climb a central structure or hang inside special cages. This part is crucial for earning bonus points and can change the outcome of the match. <br />
                        </p>
                    </section>
                    <section className='robot-image'>
                        <h1>2025 Group and Robot (Koren)</h1>
                        <img src="../../../../public/GroupPhoto.jpeg" />
                    </section>

                    <section className="robot-timeline">
                        <h2>Year Milestones</h2>
                        <ul>
                            <li>District Event Finalist</li>
                        </ul>
                    </section>
                </main>
            </div>
            <Footer />

        </body>
    );
}





