import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from "../../Nav";
import Footer from '../../Footer.jsx';
import RobotNav from '../../RobotNav.jsx'
import "../../../css files/Robot.css"

export default function Porygon2018() {
    return (
        <body className="robot-page">
            <Nav />
            <div style={{ display: 'flex', alignItems: 'flex-start', top: 20 }}>
                <RobotNav />
                <main style={{ flex: 1 }}>
                    <section className="robot-intro">
                        <h1 className="robot-title">2018 Year's Competition:</h1>
                        <p className="robot-description">
                            Objective: <br />
                            Robots score points by: <br />
                            • Placing Power Cubes (milk-crate-sized boxes) on Scales and Switches to control them. <br />
                            • Delivering Power Cubes to their Alliance Vault to activate Power-Ups. <br />
                            • Climbing the Scale Tower at the end of the match for major Endgame points. <br />
                            The game emphasizes area control, resource strategy, and climbing mechanics. <br />
                            Match Structure: <br />
                            1. Autonomous Period (15 seconds): <br />
                            Robots run pre-programmed commands to: <br />
                            • Cross the Auto Line for mobility points. <br />
                            • Deliver Power Cubes to the Switch or Scale for early control and points. <br />
                            Controlling the Switch during auto earns additional points per second. <br />
                            2. Teleoperated Period (1 minute 45 seconds): <br />
                            Drivers control their robots to: <br />
                            • Maintain control of the Switch (owned by their alliance) and the Scale (center field element). <br />
                            • Place more Power Cubes to keep the balance tipped in their favor. <br />
                            • Feed Power Cubes into the Exchange Zone to store them in the Alliance Vault. <br />
                            Teams can activate three Power-Ups from the Vault: <br />
                            • Levitate - Gives one robot a free climb. <br />
                            • Boost - Doubles points from the Switch and/or Scale for 10 seconds. <br />
                            • Force - Gives temporary control of Switch and/or Scale, even without physical ownership. <br />
                            Power-Ups are a key strategic resource—using them at the right moment can swing the match. <br />
                            3. Endgame (30 seconds): <br />
                            Robots attempt to Climb the Scale Tower (called the Boss Bar) to escape the game. <br />
                            Levitate Power-Up counts as a climb for one robot. <br />
                            If 3 robots climb (or 2 climb + 1 uses Levitate), the alliance earns the "Face the Boss" bonus and a Ranking Point. <br />
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
            <Footer />

        </body>
    );
}





