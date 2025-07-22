import '../css files/Nav.css';
import { Link } from "react-router-dom";
import React from "react";

export default function Nav() {
    return (
        <section className="navbar">
            <Link to="/" className="logo" style={{ cursor: 'pointer', textDecoration: 'none' }}>
                <img src="../../../public/NeatTeam/NeatTeam-Banner.png" alt="NEATTEAM Logo"/>
            </Link>
            <nav>
                <div className="dropdown">
                    <span className="nav-link like-link">About &#9662;</span>
                    <div className="dropdown-content">
                        <Link to="/about/team">About the Team</Link>
                        <Link to="/about/first">About FIRST</Link>
                    </div>
                </div>
                <Link to="/robot">Robot</Link>
                <Link to="/sponsors">Sponsors</Link>
                <Link to="/sponsor-us">Sponsor Us</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/community">Our Community</Link>
                <Link to="/calendar">Calendar</Link>
            </nav>
        </section>
    );
}