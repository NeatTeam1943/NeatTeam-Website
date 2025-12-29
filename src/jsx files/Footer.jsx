import '../css files/Footer.css'
import React from "react";
import { Link } from "react-router-dom";


export default function Footer() {

    return (
        <section className="footer">
            <div className="footer-columns">
                <div className="footer-col">
                    <h3>NeatTeam #1943</h3>
                    <p>
                        NeatTeam is an Israeli FIRST Robotics Competition team from Begin High School.
                        We empower students through engineering, innovation, and teamwork.
                    </p>
                </div>

                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <p>Email: <span>neatteamrh1943@gmail.com</span></p>
                    <p>Location: Rosh Haayin, Israel</p>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>
      
                    <div className={"links"}>
                        <Link to="/about/team">About</Link>
                        <Link to="/robot/koren2025">Our Robots</Link>
                        <Link to="/sponsors">Sponsors</Link>
                        <Link to="/community">Our Community</Link>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Follow Us</h4>
                    <div className="links">
                        <a href="https://www.instagram.com/neatteam_1943/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://github.com/NeatTeam1943" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.facebook.com/NeatTeam1943/" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.youtube.com/@NeatTeam" target="_blank" rel="noopener noreferrer">YouTube</a>
                        <a href="https://www.tiktok.com/@neatteam1943" target="_blank" rel="noopener noreferrer">TikTok</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} NeatTeam #1943</p>
            </div>
        </section>
    );
}