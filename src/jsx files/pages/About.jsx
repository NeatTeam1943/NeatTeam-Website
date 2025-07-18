import React from 'react';
import '../../css files/About.css';
import Navbar from '../Nav.jsx';
import Footer from '../Footer.jsx';

export default function About() {
    return (
        <body className="about-page">
            <Navbar />
            <section className="about-intro">
                <h1 className="about-title">NeatTeam's Story</h1>
                <p className="about-description">
                    bla bla bla
                </p>
            </section>

            <section className="about-timeline">
                <h2>Team Milestones</h2>
                <ul>
                    <li><strong>2006:</strong> Team Founded</li>
                </ul>
            </section>

            <Footer />
        </body>
    );
}