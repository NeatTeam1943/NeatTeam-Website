import '../css files/Nav.css'
import React from "react";

export default function Nav() {
    return (
        <section className={"navbar"}>
            <a href="/" className="logo" style={{ cursor: 'pointer' }}>
                NeatTeam #1943
            </a>
            <nav>
                <a href="About">About</a>
                <a href="Robots">Robot</a>
                <a href="Sponsors">Sponsors</a>
                <a href="Sponsor-Us">Sponsor Us</a>
                <a href="Posts">Posts</a>
                <a href="Community">Our Community</a>
                <a href="Contact-Us">Contact</a>
            </nav>
        </section>
    );
}