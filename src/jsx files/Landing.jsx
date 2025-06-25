import '../css files/Landing.css'
import Navbar from '../jsx files/Nav.jsx'
import Footer from '../jsx files/Footer.jsx'
import React from "react";

export default function Landing() {
    return (
        <body className={"homepage"}>
            <Navbar />
            <section className="section-with-img">
                <div className="text">
                    <about-short>
                        <div className="logo-wrapper">
                            <h1 class={"title"}>NeatTeam</h1>
                            <img src="../../public/Niter.png" alt="NEATTEAM Logo"/>
                        </div>
                        <h2 class={"title-underline subtitle"}>FIRST Robotics Competition Team 1943</h2>
                        <p>We are NeatTeam, Begin High School's award-winning FIRST Robotics team. We seek to impact young adults by cultivating skills in engineering, programming, and business through FIRST.</p>
                    </about-short>
                    <a href={"About"} className="button-decoration">Discover More</a>
                </div>

                <div className="image">
                    <img className={"img"} src="../../public/GroupPhoto.jpeg" alt="NEATTEAM Robot\" />
                </div>
            </section>

            <section className="section-with-img" id="robot">
                <div className="robot-image">
                    <img className={"img"} src="../../public/Koren.jpg" alt="Latest Robot" />
                </div>
                <div className="robot-details">
                    <h1 className="robot-name">Koren</h1>
                    <h2 className="robot-title">Our 2025 Robot for Reefscape</h2>
                    <div className="robot-description">
                        This is Koren our 2025 Robot, he was named after the fallen soldier Koren Bitan.
                    </div>
                    <a href={"Robots"} className="button-decoration">Past Competition Robots</a>
                </div>
            </section>

            <section className="sponsor-section" id="sponsors">
                <h2>Our Sponsors</h2>
                <div className="sponsor-marquee">
                    <div className="sponsor-track">
                        {[...Array(4)].map((_, i) => (
                            <div className="sponsor-strip" key={i}>
                                <img src="public/sponsors/google.png" alt="Google" />
                                <img src="public/sponsors/intel.png" alt="Intel" />
                                <img src="public/sponsors/boeing.png" alt="Boeing" />
                                <img src="public/sponsors/lockheed.png" alt="Lockheed Martin" />
                                <img src="public/sponsors/nvidia.png" alt="NVIDIA" />
                            </div>
                        ))}
                    </div>
                </div>
                <a href="/Sponsor-Us" className="button-decoration">
                    Sponsor Us!
                </a>
            </section>
            <Footer />
        </body>
    );
}
