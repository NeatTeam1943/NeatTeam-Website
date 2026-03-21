import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Nav from "../../Nav";
import Footer from '../../Footer.jsx';
import RobotNav from '../../RobotNav.jsx'
import "../../../css files/Robot.css"

export default function Arco2026() {
    return (
        <div className="robot-page">
            <RobotNav />
            <main>
                <section className="robot-intro">
                    <h1 className="robot-title">2026 Year's Competition:</h1>
                    <p className="robot-description">
                        Rebuilt - FRC 2026 <br />
                        Objective: <br />
                        The robots need to score FUEL into the HUB while the HUBs are active. <br />
                        The only game piece is the FUEL - a mini yellow ball that is approximately 6 inches. <br />
                        In this year's game, there are 3 areas around the field: <br />
                        • 2 ALLIANCE ZONES. <br />
                        • A NEUTRAL ZONE - to get there, robots must move under the TRENCH or over the BUMP (a small barrier). <br />
                        There are 408 FUELs in the NEUTRAL ZONE and 96 in the ALLIANCE ZONES and the OUTPOST (human player station). <br />
                        The robots need to collect FUEL from the ground and score it into the HUB while it is active (1 point per FUEL). <br />
                        Additionally, robots may climb the tower for extra points. <br />
                        The tower has 3 levels, and the higher you climb, the more points you earn. <br />
                        The game is divided into several parts: <br />
                        <br />
                        Match Structure: <br />
                        Autonomous Period (20 seconds): <br />
                        The robots need to be programmed to: <br />
                        • Score FUEL into the HUB. <br />
                        • Climb to level 1 for an extra 15 points. Robots can ONLY climb to level 1 during the Autonomous Period. <br />
                        During the Autonomous Period, both HUBs are active. <br />
                        The alliance that scores the most points will get the second and fourth Transition Shifts active. <br />
                        The other alliance will get the first and third Transition Shifts active. <br />
                        <br />
                        Teleoperated Period (1 minute and 50 seconds): <br />
                        The Teleoperated Period is divided into 5 sections: <br />
                        • Transition Shift (first 10 seconds) - both HUBs are active. <br />
                        • 4 Alliance Shifts (each 25 seconds) - HUB activity depends on the Autonomous Period results. <br />
                        During the Teleoperated Period, robots need to collect and score FUEL into the HUBs while they are active. <br />
                        <br />
                        Endgame (30 seconds): <br />
                        During the Endgame, robots may climb their tower for extra points. <br />
                        They can climb to level 1, 2, or 3 - the higher the level, the more points they earn. <br />
                        Robots may also continue scoring as in the Teleoperated Period. <br />
                        Additionally, during the Endgame, both HUBs are active. <br />
                    </p>
                    <h4><a className='kickoff-url' href="https://www.youtube.com/watch?v=_fybREErgyM">For more details about the competition, check out the year's kickoff!</a></h4>
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





