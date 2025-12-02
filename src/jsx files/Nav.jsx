import '../css files/Nav.css';
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Nav() {
    const BASE_URL = import.meta.env.BASE_URL;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
    const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
    const [teamNewsDropdownOpen, setTeamNewsDropdownOpen] = useState(false);
    const [mobileTeamNewsDropdownOpen, setMobileTeamNewsDropdownOpen] = useState(false);
    const [sponsorsDropdownOpen, setSponsorsDropdownOpen] = useState(false);
    const [mobileSponsorsDropdownOpen, setMobileSponsorsDropdownOpen] = useState(false);
    const [communityDropdownOpen, setCommunityDropdownOpen] = useState(false);
    const [mobileCommunityDropdownOpen, setMobileCommunityDropdownOpen] = useState(false);


    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        if (mobileMenuOpen) {
            setMobileDropdownOpen(false);
            setMobileTeamNewsDropdownOpen(false);
            setMobileSponsorsDropdownOpen(false);
            setMobileCommunityDropdownOpen(false);
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
        setMobileSponsorsDropdownOpen(false);
        setMobileCommunityDropdownOpen(false);
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

    const toggleSponsorsDropdown = () => {
        setSponsorsDropdownOpen(!sponsorsDropdownOpen);
    };

    const closeSponsorsDropdown = () => {
        setSponsorsDropdownOpen(false);
    };

    const toggleMobileSponsorsDropdown = () => {
        setMobileSponsorsDropdownOpen(!mobileSponsorsDropdownOpen);
    };

    const toggleCommunityDropdown = () => {
        setCommunityDropdownOpen(!communityDropdownOpen);
    };

    const closeCommunityDropdown = () => {
        setCommunityDropdownOpen(false);
    };

    const toggleMobileCommunityDropdown = () => {
        setMobileCommunityDropdownOpen(!mobileCommunityDropdownOpen);
    };

    return (
        <>
            <section className="navbar">
                <Link to="//" className="logo">
                    <img src={BASE_URL + "/NeatTeam/NeatTeam-Banner.png"} alt="NEATTEAM Logo" />
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
                    <Link to="/robot/koren2025">Our Robots</Link>
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
                        </div>
                    </div>
                    <div className="dropdown" onMouseLeave={closeCommunityDropdown}>
                        <button
                            className="nav-link like-link dropdown-trigger"
                            onMouseEnter={() => setCommunityDropdownOpen(true)}
                        >
                            Our Community
                            <span className={`dropdown-arrow ${communityDropdownOpen ? 'open' : ''}`}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </button>
                        <div className={`dropdown-content ${communityDropdownOpen ? 'open' : ''}`}>
                            <Link to="/community" onClick={closeCommunityDropdown} className="dropdown-item">
                                <span className="dropdown-item-title">Our Community</span>
                            </Link>
                            <Link to="/magazines" onClick={closeCommunityDropdown} className="dropdown-item">
                                <span className="dropdown-item-title">Magazines</span>
                            </Link>
                        </div>
                    </div>
                    <div className="dropdown" onMouseLeave={closeSponsorsDropdown}>
                        <button
                            className="nav-link like-link dropdown-trigger"
                            onMouseEnter={() => setSponsorsDropdownOpen(true)}
                        >
                            Sponsors
                            <span className={`dropdown-arrow ${sponsorsDropdownOpen ? 'open' : ''}`}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </button>
                        <div className={`dropdown-content ${sponsorsDropdownOpen ? 'open' : ''}`}>
                            <Link to="/sponsors" onClick={closeSponsorsDropdown} className="dropdown-item">
                                <span className="dropdown-item-title">Sponsors</span>
                            </Link>
                            <Link to="/sponsor-us" onClick={closeSponsorsDropdown} className="dropdown-item">
                                <span className="dropdown-item-title">Sponsor Us</span>
                            </Link>
                        </div>
                    </div>
                    <Link to="/contact-us">Contact Us</Link>
                </nav>

                {/* Mobile Menu Button - Top Right */}
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
                <Link to="/robot/koren2025" onClick={closeMobileMenu}>Our Robots</Link>
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
                    </div>
                </div>
                <div className="mobile-dropdown">
                    <button
                        className="mobile-dropdown-trigger"
                        onClick={toggleMobileSponsorsDropdown}
                    >
                        <span>Sponsors</span>
                        <span className={`mobile-dropdown-arrow ${mobileSponsorsDropdownOpen ? 'open' : ''}`}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </button>
                    <div className={`mobile-dropdown-content ${mobileSponsorsDropdownOpen ? 'open' : ''}`}>
                        <Link to="/sponsors" onClick={closeMobileMenu} className="mobile-dropdown-item">
                            <span className="mobile-dropdown-item-title">Sponsors</span>
                        </Link>
                        <Link to="/sponsor-us" onClick={closeMobileMenu} className="mobile-dropdown-item">
                            <span className="mobile-dropdown-item-title">Sponsor Us</span>
                        </Link>
                    </div>
                </div>
                <div className="mobile-dropdown">
                    <button
                        className="mobile-dropdown-trigger"
                        onClick={toggleMobileCommunityDropdown}
                    >
                        <span>Our Community</span>
                        <span className={`mobile-dropdown-arrow ${mobileCommunityDropdownOpen ? 'open' : ''}`}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </button>
                    <div className={`mobile-dropdown-content ${mobileCommunityDropdownOpen ? 'open' : ''}`}>
                        <Link to="/community" onClick={closeMobileMenu} className="mobile-dropdown-item">
                            <span className="mobile-dropdown-item-title">Our Community</span>
                        </Link>
                        <Link to="/magazines" onClick={closeMobileMenu} className="mobile-dropdown-item">
                            <span className="mobile-dropdown-item-title">Magazines</span>
                        </Link>
                    </div>
                </div>
                <Link to="/contact-us" onClick={closeMobileMenu}>Contact Us</Link>
            </div>
        </>
    );
}