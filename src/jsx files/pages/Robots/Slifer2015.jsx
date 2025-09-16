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
                    <p className="robot-description">
                        STRONGHOLD - FRC 2016 <br />
                        Objective: <br />
                        Robots collect Boulders (mini balls) and score them into their zones. <br />
                        Scoring to the hiegh basker earn more points than scoring to the low basket. <br />
                        Teams may also cross diffenses to earn more points. <br />
                        Match Structure: <br />
                        1. Autonomous Period (15 seconds): <br />
                        Robots run pre-programmed actions without driver control. They can score Boulders to their places and go to the base line for early points and cross diffenses. <br />
                        2. Teleoperated Period (2 minute and 15 seconds): <br />
                        Drivers control the robots to pick up Bounders from the field and score them in their places. <br />
                        3. Endgame (30 seconds): <br />
                        Robots race to the Stage to climb onto the casle or surrounding the calse. <br />
                        If all alliance's robots climb or surround the team get bounos points. <br />
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





