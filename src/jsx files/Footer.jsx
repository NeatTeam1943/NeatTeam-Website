import '../css files/Footer.css'
import React from "react";

export default function Footer() {
    return (
        <section className="footer" id="contact">
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
                    <p>Email: <a href="mailto:neatteamrh1943@gmail.com">neatteamrh1943@gmail.com</a></p>
                    <p>Location: Rosh Haayin, Israel</p>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="About">About</a></li>
                        <li><a href="Robots">Our Robot</a></li>
                        <li><a href="Sponsors">Sponsors</a></li>
                        <li><a href="Community">Our Community</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Follow Us</h4>
                    <div className="footer-socials">
                        <a href="https://www.instagram.com/neatteam_1943/" target="_blank" rel="noreferrer">Instagram</a>
                        <a href="https://github.com/NeatTeam1943" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://www.facebook.com/NeatTeam1943/" target="_blank" rel="noreferrer">Facebook</a>
                        <a href="https://www.youtube.com/@NeatTeam" target="_blank" rel="noreferrer">YouTube</a>
                        <a href="https://www.tiktok.com/@neatteam1943" target="_blank" rel="noreferrer">TikTok</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} NeatTeam #1943</p>
            </div>
        </section>
    );
}