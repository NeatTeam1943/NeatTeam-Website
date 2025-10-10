import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from "../../Nav";
import Footer from '../../Footer.jsx';
import RobotNav from '../../RobotNav.jsx'
import "../../../css files/Robot.css"

export default function Guido2020() {
    return (
        <div className="robot-page">
            <RobotNav />
            <main>
                <section className="robot-intro">
                    <h1 className="robot-title">2020 Year's Competition:</h1>
                    <p className="robot-description">
                        Infinity Recharge - FRC 2021 <br />
                        Objective: <br />
                        Robots manipulate Power Cells (yellow foam balls) and score them into the Power Port, a goal with three scoring zones: <br />
                        • Bottom Port - easiest to score, lowest points. <br />
                        • Outer Port - harder, more points. <br />
                        • Inner Port - most difficult, highest reward. <br />
                        Teams also aim to rotate a color wheel (Control Panel) and hang from the Shield Generator in the Endgame to activate it (the Shield Generator) and earn bonus points. <br />
                        Match Structure: <br />
                        1. Autonomous Period (15 seconds): <br />
                        Robots run pre-programmed actions to: <br />
                        • Score Power Cells into the Power Port. <br />
                        • Move off the Initiation Line for bonus points. <br />
                        Successful actions in auto earn points and help in reaching bonus thresholds faster. <br />
                        2. Teleoperated Period (2 minute 15 seconds): <br />
                        Drivers take over to: <br />
                        • Collect Power Cells from field locations and score them into their zones. <br />
                        • Coordinate to activate Stage 1, Stage 2, or Stage 3 of the Shield Generator by meeting scoring thresholds. <br />
                        • Spin the Control Panel a specific number of times (Rotation Control). <br />
                        • Rotate it to a specific color (Position Control). <br />
                        • Completing stages and control panel tasks earns Ranking Points. <br />
                        3. Endgame (30 seconds): <br />
                        Robots race to the Shield Generator Switch to climb onto the Rendezvous Point bar. <br />
                        Teams may also continue scoring and doing what they did in the Teleoperated Period. <br />
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





