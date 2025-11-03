import '../css files/Nav.css';
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
    const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
    const [teamNewsDropdownOpen, setTeamNewsDropdownOpen] = useState(false);
    const [mobileTeamNewsDropdownOpen, setMobileTeamNewsDropdownOpen] = useState(false);
    const BASE_URL = import.meta.env.BASE_URL;


    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        if (mobileMenuOpen) {
            setMobileDropdownOpen(false);
            setMobileTeamNewsDropdownOpen(false);
        }
    };

    const toggleMobileDropdown = () => {
        setMobileDropdownOpen(!mobileDropdownOpen);
    };

    const toggleMobileTeamNewsDropdown = () => {
        setMobileTeamNewsDropdownOpen(!mobileTeamNewsDropdownOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setMobileDropdownOpen(false);
        setMobileTeamNewsDropdownOpen(false);
    };

    const toggleDesktopDropdown = () => {
        setDesktopDropdownOpen(!desktopDropdownOpen);
    };

    const closeDesktopDropdown = () => {
        setDesktopDropdownOpen(false);
    };

    const toggleTeamNewsDropdown = () => {
        setTeamNewsDropdownOpen(!teamNewsDropdownOpen);
    };

    const closeTeamNewsDropdown = () => {
        setTeamNewsDropdownOpen(false);
    };

    return (
        <>
            <section className="navbar">
                <Link to="/base" className="logo">
                    <img src={BASE_URL + `NeatTeam/NeatTeam-Banner.png`} alt="NEATTEAM Logo" />
                </Link>

                {/* Desktop Navigation */}
                <nav>
                    <div className="dropdown" onMouseLeave={closeDesktopDropdown}>
                        <button
                            className="nav-link like-link dropdown-trigger"
                            onMouseEnter={() => setDesktopDropdownOpen(true)}
                        >
                            About
                            <span className={`dropdown-arrow ${desktopDropdownOpen ? 'open' : ''}`}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </button>
                        <div className={`dropdown-content ${desktopDropdownOpen ? 'open' : ''}`}>
                            <Link to="/about/team" onClick={closeDesktopDropdown} className="dropdown-item">
                                <span className="dropdown-item-title">About the Team</span>
                            </Link>
                            <Link to="/about/first" onClick={closeDesktopDropdown} className="dropdown-item">
                                <span className="dropdown-item-title">About FIRST</span>
                            </Link>
                        </div>
                    </div>
                    <Link to="/robot/koren2025">Robot</Link>
                    <div className="dropdown" onMouseLeave={closeTeamNewsDropdown}>
                        <button
                            className="nav-link like-link dropdown-trigger"
                            onMouseEnter={() => setTeamNewsDropdownOpen(true)}
                        >
                            Team News
                            <span className={`dropdown-arrow ${teamNewsDropdownOpen ? 'open' : ''}`}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </button>
                        <div className={`dropdown-content ${teamNewsDropdownOpen ? 'open' : ''}`}>
                            <Link to="/posts" onClick={closeTeamNewsDropdown} className="dropdown-item">
                                <span className="dropdown-item-title">Posts</span>
                            </Link>
                            <Link to="/calendar" onClick={closeTeamNewsDropdown} className="dropdown-item">
                                <span className="dropdown-item-title">Calendar</span>
                            </Link>
                            <Link to="/community" onClick={closeTeamNewsDropdown} className="dropdown-item">
                                <span className="dropdown-item-title">Our Community</span>
                            </Link>
                        </div>
                    </div>
                    <Link to="/sponsors">Sponsors</Link>
                    <Link to="/sponsor-us">Sponsor Us</Link>
                    <Link to="/contact-us">Contact Us</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </section>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-dropdown">
                    <button
                        className="mobile-dropdown-trigger"
                        onClick={toggleMobileDropdown}
                    >
                        <span>About</span>
                        <span className={`mobile-dropdown-arrow ${mobileDropdownOpen ? 'open' : ''}`}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </button>
                    <div className={`mobile-dropdown-content ${mobileDropdownOpen ? 'open' : ''}`}>
                        <Link to="/about/team" onClick={closeMobileMenu} className="mobile-dropdown-item">
                            <span className="mobile-dropdown-item-title">About the Team</span>
                        </Link>
                        <Link to="/about/first" onClick={closeMobileMenu} className="mobile-dropdown-item">
                            <span className="mobile-dropdown-item-title">About FIRST</span>
                        </Link>
                    </div>
                </div>
                <Link to="/robot/koren2025" onClick={closeMobileMenu}>Robots</Link>
                <div className="mobile-dropdown">
                    <button
                        className="mobile-dropdown-trigger"
                        onClick={toggleMobileTeamNewsDropdown}
                    >
                        <span>Team News</span>
                        <span className={`mobile-dropdown-arrow ${mobileTeamNewsDropdownOpen ? 'open' : ''}`}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </button>
                    <div className={`mobile-dropdown-content ${mobileTeamNewsDropdownOpen ? 'open' : ''}`}>
                        <Link to="/posts" onClick={closeMobileMenu} className="mobile-dropdown-item">
                            <span className="mobile-dropdown-item-title">Posts</span>
                        </Link>
                        <Link to="/calendar" onClick={closeMobileMenu} className="mobile-dropdown-item">
                            <span className="mobile-dropdown-item-title">Calendar</span>
                        </Link>
                        <Link to="/our-community" onClick={closeMobileMenu} className="mobile-dropdown-item">
                            <span className="mobile-dropdown-item-title">Our Community</span>
                        </Link>
                    </div>
                </div>
                <Link to="/sponsors" onClick={closeMobileMenu}>Sponsors</Link>
                <Link to="/sponsor-us" onClick={closeMobileMenu}>Sponsor Us</Link>
                <Link to="/contact-us" onClick={closeMobileMenu}>Contact Us</Link>
            </div>
        </>
    );
}