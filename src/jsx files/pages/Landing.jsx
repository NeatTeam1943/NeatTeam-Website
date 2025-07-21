import '../../css files/pages/Landing.css'
import React from "react";
import {Link} from "react-router-dom";

export default function Landing() {
    return (
        <div className={"homepage"}>
            <section className="section-with-img">
                <div className="text">
                    <about-short>
                        <div className="logo-wrapper">
                            <img src="../../../public/NeatTeam/NeatTeam-banner-dark.png" alt="NEATTEAM Logo"/>
                        </div>
                        <h2 class={"title-underline subtitle"}>FIRST Robotics Competition Team 1943</h2>
                        <p>We are NeatTeam, Begin High School's award-winning FIRST Robotics team. We seek to impact young adults by cultivating skills in engineering, programming, and business through FIRST.</p>
                    </about-short>
                    <Link to={"/about/team"} className="button-decoration">Discover More</Link>
                </div>

                <div className="image">
                    <img className={"img"} src="../../../public/NeatTeam/GroupPhoto.jpeg" alt="NEATTEAM Robot\" />
                </div>
            </section>

            <section className="section-with-img" id="robot">
                <div className="robot-image">
                    <img className={"img"} src="../../../public/Robots/Koren.jpg" alt="Latest Robot" />
                </div>
                <div className="robot-details">
                    <h1 className="robot-name">Koren</h1>
                    <h2 className="robot-title">Our 2025 Robot for Reefscape</h2>
                    <div className="robot-description">
                        This is Koren our 2025 Robot, he was named after the fallen soldier Koren Bitan.
                    </div>
                    <Link to={"Robots"} className="button-decoration">Past Competition Robots</Link>
                </div>
            </section>

            <section className="sponsor-section" id="sponsors">
                <h2>Our Sponsors</h2>
                <div className="sponsor-marquee">
                    <div className="sponsor-track">
                        {[...Array(4)].map((_, i) => (
                            <div className="sponsor-strip" key={i}>
                                <img src="public/Sponsors/Innoviz-Logo.png" alt="Innoviz" />
                                <img src="public/Sponsors/FIRST-LOGO.png" alt="FIRST" />
                                <img src="public/Sponsors/kornit-vertical-logo-01.png" alt="Kornit" />
                                <img src="public/Sponsors/Rosh-Electroptics.png" alt="Rosh Electroptics" />
                                <img src="public/Sponsors/IFEL-Logo.png" alt="IFEL" />
                                <img src="public/Sponsors/ROSH-HAAIN-LOGO.png" alt="ROSH-HAAIN" />
                                <img src="public/Sponsors/LOGO-EID.png" alt="EID" />
                            </div>
                        ))}
                    </div>
                </div>
                <Link to="/Sponsor-Us" className="button-decoration"> Sponsor Us! </Link>
            </section>
        </div>
    );
}
