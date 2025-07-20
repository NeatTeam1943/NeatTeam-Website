import React from "react";
import '../../css files/AboutFirst.css';

export default function AboutFirst() {
    return (
        <div className="about-first-page">
            <section className="intro-section">
                <h1 className="main-title">About FIRST</h1>
                <p className="text">
                    FIRST (For Inspiration and Recognition of Science and Technology) is a global nonprofit that prepares young people for the future through team-based robotics competitions. Founded in 1989 by inventor Dean Kamen, FIRST inspires students to become leaders and innovators in science, technology, engineering, and math (STEM).
                </p>
            </section>

            <section className="mission-section">
                <h2 className="section-title">Our Mission</h2>
                <p className={"text"}>
                    The mission of FIRST is to inspire young people to be science and technology leaders and innovators by engaging them in exciting mentor-based programs that build STEM skills, inspire innovation, and foster well-rounded life capabilities like self-confidence, communication, and leadership.
                </p>
            </section>

            <section className="programs-section">
                <h2 className="section-title">Programs</h2>
                <ul className="program-list">
                    <li><strong>FIRST LEGO League (FLL):</strong> For students ages 4–16 (age varies by country), focusing on real-world problems, research, and robot design using LEGO.</li>
                    <li><strong>FIRST Tech Challenge (FTC):</strong> For middle and high school students, teams design, build, and program robots to compete in an alliance format.</li>
                    <li><strong>FIRST Robotics Competition (FRC):</strong> The most advanced level, where high school teams build industrial-sized robots to play a themed game in large-scale competitions.</li>
                </ul>
            </section>

            <section className="impact-section">
                <h2 className="section-title">Global Impact</h2>
                <p className={"text"}>
                    With over 700,000 students in more than 100 countries, FIRST has become the world’s leading youth-serving nonprofit advancing STEM education. FIRST alumni are significantly more likely to pursue STEM careers and have access to millions of dollars in scholarships.
                </p>
            </section>

            <section className="cta-section">
                <h2 className="section-title">Learn More</h2>
                <p>
                    Visit the official FIRST website to learn more: <a href="https://www.firstinspires.org" target="_blank" rel="noopener noreferrer">firstinspires.org</a>
                </p>
            </section>
        </div>
    );
}