import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from "../../Nav";
import Footer from '../../Footer.jsx';
import RobotNav from '../../RobotNav.jsx'
import "../../../css files/Robot.css"

export default function Deoys2019() {
    return (
        <body className="robot-page">
            <Nav />
            <div style={{ display: 'flex', alignItems: 'flex-start', top: 20 }}>
                <RobotNav />
                <main style={{ flex: 1 }}>
                    <section className="robot-intro">
                        <h1 className="robot-title">2019 Year's Competition:</h1>
                        <p className="robot-description">
                            Distination - FRC 2019 <br />
                            Objective: <br />
                            Robots operate on a futuristic Mars outpost, working to prepare rockets and cargo ships before liftoff—during a storm on Planet Primus. <br />
                            Robots may: <br />
                            • Place Hatch Panels (large plastic disks) to seal openings on rockets and cargo ships. <br />
                            • Load Cargo (orange rubber balls) into sealed bays for points. <br />
                            • Climb the Habitat Platform (HAB) at the end of the match for bonus points. <br />
                            1. Sandstorm Period (first 15 seconds): <br />
                            Instead of traditional autonomous, robots operate during a Sandstorm (a vision-blocking curtain is lowered):
                            robots can be pre-programmed or driver-controlled using onboard vision systems. <br />
                            The robots may: <br />
                            • Cross the HAB line for mobility points. <br />
                            • Place Hatch Panels or score Cargo. <br />
                            2. Teleoperated Period (1 minutes 45 seconds): <br />
                            After the Sandstorm ends, drivers get their robots directly to collect and place Hatch Panels on: <br />
                            • The Rocket (3 levels, each with 2 panels per side). <br />
                            • The Cargo Ship (8 side bays). <br />
                            Each Cargo requires a Hatch Panel to stay in place. <br />
                            Cargo can be placed in the Rocket or Cargo Ship. <br />
                            A complete Rocket (all 6 Hatch Panels and 6 Cargo) earns a Ranking Point. <br />
                            3. Endgame (Final 30 seconds): <br />
                            Robots return to the HAB platform to climb for bonus points: <br />
                            • Level 1 (flat floor). <br />
                            • Level 2 (medium height step). <br />
                            • Level 3 (tall step). <br />
                            If the alliance scores 15 hab climb Points, they earn an additional Ranking Point. <br />
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





