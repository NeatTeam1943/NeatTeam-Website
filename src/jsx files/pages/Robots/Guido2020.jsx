import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from "../../Nav";
import Footer from '../../Footer.jsx';
import RobotNav from '../../RobotNav.jsx'
import "../../../css files/Robot.css"

export default function Guido2020() {
    return (
        <body className="robot-page">
            <Nav />
            <div style={{ display: 'flex', alignItems: 'flex-start', top: 20 }}>
                <RobotNav />
                <main style={{ flex: 1 }}>
                    <section className="robot-intro">
                        <h1 className="robot-title">2020 Year's Competition:</h1>
                        <p className="robot-description">
                            Reefscape - FRC 2020 <br />
                            Objective: <br />
                            Robots manipulate Power Cells (yellow foam balls) and score them into the Power Port, a goal with three scoring zones: <br />
                            • Bottom Port - easiest to score, worth the fewest points <br />
                            • Outer Port - harder, worth more points <br />
                            • Inner Port - most difficult and rewarding <br />
                            Teams also aim to complete tasks involving the Control Panel (a rotating color wheel)
                            and to hang from the Shield Generator during Endgame to activate stages and earn Ranking Points and bonus points. <br />
                            Match Structure: <br />
                            1. Autonomous Period (15 seconds): <br />
                            Robots operate autonomously to: <br />
                            • Score Power Cells into the Power Port <br />
                            • Move off the Initiation Line to earn mobility points <br />
                            Successful actions during this period count toward Stage 1 progress and offer an early advantage. <br />
                            2. Teleoperated Period (1 minute and 45 seconds): <br />
                            Drivers take control of their robots to: <br />
                            Collect Power Cells from field zones <br />
                            Score them into different ports for points <br />
                            Collaborate with their alliance to complete the following Shield Generator stages: <br />
                            • Stage 1: Score 9 Power Cells <br />
                            • Stage 2: Score 20 Power Cells and complete Rotation Control on the Control Panel <br />
                            • Stage 3: Score 20 more Power Cells and complete Position Control on the Control Panel <br />
                            Control Panel Tasks: <br />
                            • Rotation Control: Spin the wheel at least 3 full turns <br />
                            • Position Control: Stop the wheel when a specific color aligns under the sensor <br />
                            • Completing all 3 stages activates the Shield Generator and earns a Ranking Point. <br />
                            3. Endgame (last 30 seconds): <br />
                            Robots head to the Rendezvous Point to: <br />
                            • Climb onto the Shield Generator's bar <br />
                            • Balance the bar with alliance partners <br />
                            • The bar is mounted on a pivot and will tilt—so coordinated balancing is required. <br />
                            If the bar is level and two or more robots are hanging, the alliance can earn a Ranking Point
                            plus a high number of match points. <br />
                            Teams may also continue scoring and doing what they did in the Teleoperated Period <br />
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
            <Footer />

        </body>
    );
}





