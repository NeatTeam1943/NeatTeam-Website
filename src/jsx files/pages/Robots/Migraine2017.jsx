import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from "../../Nav";
import Footer from '../../Footer.jsx';
import RobotNav from '../../RobotNav.jsx'
import "../../../css files/Robot.css"

export default function Migraine2017() {
    return (
        <div className="robot-page">
            <RobotNav />
            <main>
                <section className="robot-intro">
                    <h1 className="robot-title">2017 Year's Competition:</h1>
                    <p className="robot-description">
                        STEAMWORKS - FRC 2017 <br />
                        Objective: <br />
                        Robots collect two types of game pieces: <br />
                        • Fuel - mini ball. <br />
                        • Geers - mini geer. <br />
                        Scoring to the hiegh basker earn 1 point for each 3 Fuel and for the low basket it's 9 Fuel for each point. <br />
                        Teams may also score the Geers in the airship to earn points. <br />
                        Match Structure: <br />
                        1. Autonomous Period (15 seconds): <br />
                        Robots run pre-programmed actions without driver control. They can score Fuels and go to the base line for early points. <br />
                        2. Teleoperated Period (2 minute and 15 seconds): <br />
                        Drivers control the robots to pick up Fuel and Geers from the field and score them in their places. <br />
                        3. Endgame (30 seconds): <br />
                        Robots race to the Stage to climb onto aboard. <br />
                        Teams may also continue scoring and doing what they did in the Teleoperated Period. <br />
                    </p>
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





