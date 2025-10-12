import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from "../../Nav";
import Footer from '../../Footer.jsx';
import RobotNav from '../../RobotNav.jsx'
import "../../../css files/Robot.css"

export default function Randall2021() {
    return (
        <div className="robot-page">
            <RobotNav />
            <main>
                <section className="robot-intro">
                    <h1 className="robot-title">2021 Year's Competition:</h1>
                    <p className="robot-description coming-soon">
                        In this year, there were covid19, and there were no competition
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
    );
}





