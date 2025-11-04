import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from "../../Nav";
import Footer from '../../Footer.jsx';
import RobotNav from '../../RobotNav.jsx'
import "../../../css files/Robot.css"


export default function Koren2025() {
    const BASE_URL = import.meta.env.BASE_URL;
    return (
        <div className="robot-page">
            <RobotNav />
            <main>
                    <section className="robot-intro">
                        <h1 className="robot-title">2025 Year's Competition:</h1>
                        <p className="robot-description">
                            Reefscape - FRC 2025 <br />
                            Objective: <br />
                            Robots collect two types of game pieces: <br />
                            • Coral - represented by plastic pipes. <br />
                            • Algae - represented by foam balls. <br />
                            These items must be delivered and scored into specific zones around the field to earn points: <br />
                            • Corals may be scored to 4 different places (bottom, low, middle and hiegh reefs). <br />
                            • Algae may be scored to 2 different places (big net and processor). <br />
                            If the corals scored for each place (bottom, low, middle and hiegh reefs) the team get an additional ranking point. <br />
                            Match Structure: <br />
                            1. Autonomous Period (15 seconds): <br />
                            Robots operate on their own to score as much corals and alges to there zones as possible. <br />
                            2. Teleoperated Period (1 minutes and 45 seconds): <br />
                            Drivers control the robots to collect coral and algae and score them in various goals. <br />
                            3. Endgame (l30 seconds): <br />
                            Robots try to climb a central structure or hang inside special cages. <br />
                            Teams may also continue scoring and doing what they did in the Teleoperated Period. <br />
                            <br /><br />

                        </p>

                    </section>
                    <section className='robot-image'>
                        <h1>2025 Group and Robot (Koren)</h1>
                        <img src={BASE_URL + "/NeatTeam/GroupPhoto.jpeg"} alt="2025 Group and Robot (Koren)" />
                    </section>

                    <section className="robot-timeline">
                        <h2>Year Milestones</h2>
                        <ul>
                            <li>District Event Finalist</li>
                        </ul>
                    </section>
                </main>
        </div>
    );
}





