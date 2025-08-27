import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from "../../Nav";
import Footer from '../../Footer.jsx';
import RobotNav from '../../RobotNav.jsx'
import "../../../css files/Robot.css"

export default function Freddy2023() {
    return (
        <div className="robot-page">
            <RobotNav />
            <main>
                    <section className="robot-intro">
                        <h1 className="robot-title">2023 Year's Competition:</h1>
                        <p className="robot-description">
                            Charged Up - FRC 2023 <br />
                            Objective: <br />
                            Robots work to bring power to their grid by collecting and placing game pieces: <br />
                            • Yellow Cones <br />
                            • Purple Cubes <br />
                            These are scored onto a grid structure made up of nodes at different heights (low, middle, and high rows). <br />
                            Teams build “Links” (rows of 3 scored game pieces) for extra points and to energize the grid. <br />
                            Match Structure: <br />
                            1. Autonomous Period (15 seconds): <br />
                            Robots act autonomously to score game pieces and leave their starting zone (called the community) for points. <br />
                            2. Teleoperated Period (1 minutes and 45 seconds): <br />
                            Drivers control the robots to: <br />
                            • Collect cones and cubes from the field. <br />
                            • Score them on the grid in the proper nodes. <br />
                            • Work toward building complete “Links”. <br />
                            3. Endgame (30 seconds): <br />
                            Robots attempt to balance on a Charging Station (a tilting platform) for big bonus points. <br />
                            Teams may also continue scoring and doing what they did in the Teleoperated Period. <br />
                        </p>
                    </section>

                    <section className="robot-timeline">
                        <h2>Year Milestones</h2>
                        <ul>
                            <li>
                                OffSeason Event Finalist <br />
                                District Event Finalist <br />
                            </li>
                        </ul>
                    </section>
                </main>
        </div>
    );
}





