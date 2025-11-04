import '../../css files/pages/Landing.css'
import React from "react";
import {Link} from "react-router-dom";

export default function Landing() {
    const BASE_URL = import.meta.env.BASE_URL;
    return (
        <div className="homepage">
            <div className="homepage_container">
                <section className="section-with-img">
                    <div className="text">
                        <div className="logo-wrapper">
                            <img src={BASE_URL + "/NeatTeam/NeatTeam-banner-dark.png"} alt="NEATTEAM Logo"/>
                        </div>
                        <h2 className="title-underline subtitle">FIRST Robotics Competition Team 1943</h2>
                        <p>We are NeatTeam, Begin High School's award-winning FIRST Robotics team. We seek to impact young adults by cultivating skills in engineering, programming, and business through FIRST.</p>
                        <Link to="/NeatTeam-Website/about/team" className="button-decoration">Discover More</Link>
                    </div>

                    <div className="image">
                        <img className="img" src={BASE_URL + "/NeatTeam/GroupPhoto.jpeg"} alt="NEATTEAM Team Photo" />
                    </div>
                </section>

                <section className="section-with-img" id="robot">
                    <div className="robot-image">
                        <img className="img" src={BASE_URL + "/Robots/Koren.jpg"} alt="Koren Robot 2025" />
                    </div>
                    <div className="robot-details">
                        <h1 className="robot-name">Koren</h1>
                        <h2 className="robot-title">Our 2025 Robot for Reefscape</h2>
                        <div className="robot-description">
                            This is Koren, our 2025 Robot. He was named after the fallen soldier Koren Bitan.
                        </div>
                        <Link to="/NeatTeam-Website/robot/koren2025" className="button-decoration">Past Competition Robots</Link>
                    </div>
                </section>

            </div>
            <section className="sponsor-section" id="sponsors">
                <div className="sponsor-header">
                    <h2>Our Amazing Sponsors</h2>
                    <p>We're grateful for the support of these incredible organizations that make our robotics journey possible</p>
                </div>

                <div className="sponsor-marquee">
                    <div className="sponsor-track">
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/Innoviz-Logo.png"} alt="Innoviz" />
                        </div>
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/FIRST-LOGO.png"} alt="FIRST" />
                        </div>
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/kornit-vertical-logo-01.png"} alt="Kornit" />
                        </div>
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/Rosh-Electroptics.png"} alt="Rosh Electroptics" />
                        </div>
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/IFEL-Logo.png"} alt="IFEL" />
                        </div>
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/ROSH-HAAIN-LOGO.png"} alt="ROSH-HAAIN" />
                        </div>
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/LOGO-EID.png"} alt="EID" />
                        </div>

                        {/* Duplicate items for seamless loop */}
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/Innoviz-Logo.png"} alt="Innoviz" />
                        </div>
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/FIRST-LOGO.png"} alt="FIRST" />
                        </div>
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/kornit-vertical-logo-01.png"} alt="Kornit" />
                        </div>
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/Rosh-Electroptics.png"} alt="Rosh Electroptics" />
                        </div>
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/IFEL-Logo.png"} alt="IFEL" />
                        </div>
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/ROSH-HAAIN-LOGO.png"} alt="ROSH-HAAIN" />
                        </div>
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/LOGO-EID.png"} alt="EID" />
                        </div>
                    </div>
                </div>

                <div className="sponsor-cta">
                    <div className="cta-content">
                        <h3>Join Our Sponsors</h3>
                        <p>Support the next generation of engineers and innovators</p>
                        <Link to="/NeatTeam-Website/sponsor-us" className="button-decoration">Become a Sponsor</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}