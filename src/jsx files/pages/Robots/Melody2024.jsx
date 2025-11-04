import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from "../../Nav";
import Footer from '../../Footer.jsx';
import RobotNav from '../../RobotNav.jsx'
import "../../../css files/Robot.css"

export default function Melody2024() {  
    const BASE_URL = import.meta.env.BASE_URL;
    return (
        <div className="robot-page">
            <RobotNav />
            <main>
                <section className="robot-intro">
                    <h1 className="robot-title">2024 Year's Competition:</h1>
                    <p className="robot-description">
                        Crescendo - FRC 2024 <br />
                        Objective: <br />
                        Robots collect and score foam rings called Notes into three different scoring areas to earn points: <br />
                        • Amp - a low goal on the side of the field. <br />
                        • Speaker - a high goal near the alliance wall <br />
                        • Trap - a special high goal under the Stage, only available during Endgame <br />
                        Scoring in both the Amp and Speaker can help activate a special stage element for bonus points. <br />
                        Match Structure: <br />
                        1. Autonomous Period (15 seconds): <br />
                        Robots run pre-programmed actions without driver control. They can score Notes and leave their starting zones for early points. <br />
                        2. Teleoperated Period (1 minute and 45 seconds): <br />
                        Drivers control the robots to pick up Notes from the field and score them in the Amp or Speaker. <br />
                        Teams can also activate a Co-Op Bonus or power up their Stage for the endgame. <br />
                        3. Endgame (30 seconds): <br />
                        Robots race to the Stage to climb onto chains. <br />
                        Teams may also continue scoring and doing what they did in the Teleoperated Period. <br />
                    </p>
                </section>

                <section className='robot-image'>
                    <h1>2024 Group and Robot (Melody)</h1>
                    <img src={BASE_URL + "/Robots/2024Group.jpeg"} alt="2024 Group and Robot (Melody)" />
                </section>




                <section className="robot-timeline">
                    <h2>Year Milestones</h2>
                    <ul>
                        <li>OffSeason Event Winner</li>
                    </ul>
                </section>
            </main>
        </div>
    );
}





