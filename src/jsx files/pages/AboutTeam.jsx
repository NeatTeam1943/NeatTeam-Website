import React from 'react';
import '../../css files/AboutTeam.css';
import Navbar from '../Nav.jsx';
import Footer from '../Footer.jsx';

export default function About() {
    return (
        <body className="about-page">
            <section className="about-intro">
                <h1 className="about-title">Our's Story</h1>
                <p className="about-description">
                    Since 2006, the high school robotics team  NeatTeam #1943 from Rosh HaAyin's Begin High School has represented Israel with pride in the international FIRST Robotics Competition. Mazal Nagar started the team, which has since developed into an enthusiastic group of students that design, construct, and compete with cutting-edge robots on national and international arenas, taking home numerous honors and making it to the world championship.                </p>
                <p className="about-description">
                    There is more to  NeatTeam than just robots. The team's fundamental goal is to use science and technology to advance society. Team members serve the community every week by mentoring younger robotics teams, organizing scientific clubs for children from disadvantaged families, instructing older citizens in technology, and even assisting small business owners, particularly women, in embracing digital tools. In order to provide inclusive science education to kids with special needs, they also work with youth movements like Krembo Wings.                </p>
                <p className="about-description">
                     NeatTeam is a special illustration of what young brains can accomplish when provided with the resources and encouragement to flourish because of its harmony of creativity, collaboration, and social impact. Sponsoring  NeatTeam #1943 is an investment in the next generation of changemakers, not just the next robot.                </p>
            </section>

            <section className="about-timeline">
                <h2>Team Milestones</h2>
                <ul>
                    <li><strong>2025:</strong> District Event Finalist</li>
                    <li><strong>2024:</strong> OffSeason Event Winner</li>
                    <li><strong>2023:</strong> OffSeason Event Finalist</li>
                    <li><strong>2023:</strong> District Event Finalist</li>
                    <li><strong>2023:</strong> District Event Finalist</li>
                    <li><strong>2022:</strong> District Event Winner</li>
                    <li><strong>2017:</strong> District Event Finalist</li>
                    <li><strong>2013:</strong> FIRST Dean's List Finalist (Shai Ludvinovsky)</li>
                    <li><strong>2011:</strong> FIRST Dean's List Finalist Award (Lior Milo)</li>
                    <li><strong>2008:</strong> Chrysler Team Spirit Award</li>
                    <li><strong>2007:</strong> Autodesk Visualization Award</li>
                    <li><strong>2006:</strong> Regional Finalist</li>
                    <li><strong>2006:</strong> Rookie Inspiration Award</li>
                    <li><strong>2006:</strong> Team Founded</li>
                </ul>
            </section>
        </body>
    );
}