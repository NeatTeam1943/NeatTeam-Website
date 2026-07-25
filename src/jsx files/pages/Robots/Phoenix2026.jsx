import React from 'react'
import RobotNav from '../../RobotNav.jsx'
import "../../../css files/Robot.css"

export default function Phoenix2026() {
    const BASE_URL = import.meta.env.BASE_URL;

    return (
        <div className="robot-page">
            <RobotNav />
            <main>
                <section className="robot-intro">
                    <h1 className="robot-title">2026 Rebuilt Season:</h1>
                    <p className="robot-description">
                        FRC 2026 — Rebuilt Season <br />
                        <br />
                        After a competitive 2025 campaign with Koren, Team 1943 made the decision to
                        enter a full rebuild cycle before the 2026 season. The result is Gabi —
                        representing everything the team learned, discarded, and rebuilt from the ground up. <br />
                        <br />
                        Competition Overview: <br />
                        The 2026 FRC season challenged teams to compete in a fast-paced game requiring
                        precise game-piece manipulation, autonomous programming, and endgame climbing.
                        Alliances of three robots collaborated each match to outscore opponents across
                        three distinct match phases. <br />
                        <br />
                        Game Pieces: <br />
                        • Rings — circular game pieces scored into elevated targets for high point value. <br />
                        • Capsules — cylindrical pieces delivered to ground-level processors for consistent scoring. <br />
                        <br />
                        Scoring Zones: <br />
                        • High Tower — rings launched into elevated basket, highest single-piece value. <br />
                        • Mid Rail — rings placed on a mid-height bar, moderate value. <br />
                        • Processor Bay — capsules delivered by ground bots, bonus multiplier if full. <br />
                        • Alliance Zone — human-player station for feeding game pieces to robots. <br />
                        <br />
                        Match Structure: <br />
                        1. Autonomous Period (15 seconds): <br />
                        Robots operate fully independently. Pre-programmed routines attempt to score rings
                        and position capsules before drivers take control. Bonus ranking points are awarded
                        for completing autonomous objectives. <br />
                        <br />
                        2. Teleoperated Period (2 minutes and 15 seconds): <br />
                        Drivers direct robots to collect game pieces from the field and human players,
                        then score them into designated targets. Coordination between alliance robots is
                        critical for high-efficiency cycles. <br />
                        <br />
                        3. Endgame (last 30 seconds): <br />
                        Robots must attempt to climb a central gantry structure with multiple levels.
                        Higher climbing levels award more points. A full alliance climb at the highest
                        level earns a ranking point bonus. <br />
                        <br />
                        Gabi's Design Focus: <br />
                        The rebuild centered on three engineering pillars — intake reliability, shooter
                        consistency, and climb speed. The team redesigned the drivetrain for improved
                        traction and weight distribution, replaced the previous arm mechanism with a
                        wrist-pivot shooter that reduced cycle time, and engineered a two-stage telescoping
                        climber capable of reaching the highest gantry bar. Software improvements included
                        full PathPlanner autonomous routing, vision-assisted targeting using PhotonVision,
                        and a driver-assist mode for automatic game-piece alignment. <br />
                    </p>
                </section>

                <section className='robot-image'>
                    <h1>2026 Group and Robot (Gabi)</h1>
                    <img src={BASE_URL + "/NeatTeam/GroupPhoto2026.jpeg"} alt="2026 Group and Robot (Gabi)" />
                </section>
            </main>
        </div>
    );
}
