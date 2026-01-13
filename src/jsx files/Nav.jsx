import '../css files/Nav.css';
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

export default function Nav() {
    const BASE_URL = import.meta.env.BASE_URL;
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDesktopDropdown, setActiveDesktopDropdown] = useState(null);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
    const dropdownRefs = useRef({});
    const leaveTimeoutRef = useRef(null);

    // Check if a route is active
    const isActive = (path) => {
        return location.pathname === path || location.pathname.startsWith(path + '/');
    };

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (activeDesktopDropdown) {
                const dropdownElement = dropdownRefs.current[activeDesktopDropdown];
                if (dropdownElement && !dropdownElement.contains(event.target)) {
                    setActiveDesktopDropdown(null);
                }
            }
        };

        if (activeDesktopDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [activeDesktopDropdown]);

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (leaveTimeoutRef.current) {
                clearTimeout(leaveTimeoutRef.current);
            }
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        if (mobileMenuOpen) {
            setActiveMobileDropdown(null);
        }
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
        setActiveMobileDropdown(null);
    };

    // Desktop dropdown handlers
    const handleDesktopDropdownEnter = (dropdownName) => {
        // Clear any pending close timeout
        if (leaveTimeoutRef.current) {
            clearTimeout(leaveTimeoutRef.current);
            leaveTimeoutRef.current = null;
        }
        setActiveDesktopDropdown(dropdownName);
    };

    const handleDesktopDropdownLeave = () => {
        // Small delay to allow moving to dropdown content
        leaveTimeoutRef.current = setTimeout(() => {
            setActiveDesktopDropdown(null);
            leaveTimeoutRef.current = null;
        }, 200);
    };

    const handleDesktopDropdownClick = (dropdownName) => {
        setActiveDesktopDropdown(activeDesktopDropdown === dropdownName ? null : dropdownName);
    };

    const closeDesktopDropdown = () => {
        setActiveDesktopDropdown(null);
    };

    // Mobile dropdown handlers
    const toggleMobileDropdown = (dropdownName) => {
        setActiveMobileDropdown(activeMobileDropdown === dropdownName ? null : dropdownName);
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
            <div className="navbar-wrapper">
                <section className="navbar">
                    <Link to="/" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <img src={BASE_URL + "/NeatTeam/NeatTeam-Banner.png"} alt="NEATTEAM Logo" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav>
                        <div 
                            className="dropdown" 
                            ref={el => dropdownRefs.current['about'] = el}
                            onMouseEnter={() => handleDesktopDropdownEnter('about')}
                            onMouseLeave={handleDesktopDropdownLeave}
                        >
                            <button
                                className={`nav-link like-link dropdown-trigger ${isActive('/about') ? 'active' : ''}`}
                                onClick={() => handleDesktopDropdownClick('about')}
                            >
                                About
                                <span className={`dropdown-arrow ${activeDesktopDropdown === 'about' ? 'open' : ''}`}>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </button>
                            <div 
                                className={`dropdown-content ${activeDesktopDropdown === 'about' ? 'open' : ''}`}
                                onMouseEnter={() => handleDesktopDropdownEnter('about')}
                                onMouseLeave={handleDesktopDropdownLeave}
                            >
                                <Link to="/about/team" onClick={closeDesktopDropdown} className="dropdown-item">
                                    <span className="dropdown-item-title">About the Team</span>
                                </Link>
                                <Link to="/about/first" onClick={closeDesktopDropdown} className="dropdown-item">
                                    <span className="dropdown-item-title">About FIRST</span>
                                </Link>
                            </div>
                        </div>
                        <Link to="/robot/koren2025" className={`nav-link ${isActive('/robot') ? 'active' : ''}`}>Our Robots</Link>
                        <div 
                            className="dropdown"
                            ref={el => dropdownRefs.current['teamNews'] = el}
                            onMouseEnter={() => handleDesktopDropdownEnter('teamNews')}
                            onMouseLeave={handleDesktopDropdownLeave}
                        >
                            <button
                                className={`nav-link like-link dropdown-trigger ${(isActive('/posts') || isActive('/calendar')) ? 'active' : ''}`}
                                onClick={() => handleDesktopDropdownClick('teamNews')}
                            >
                                Team News
                                <span className={`dropdown-arrow ${activeDesktopDropdown === 'teamNews' ? 'open' : ''}`}>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </button>
                            <div 
                                className={`dropdown-content ${activeDesktopDropdown === 'teamNews' ? 'open' : ''}`}
                                onMouseEnter={() => handleDesktopDropdownEnter('teamNews')}
                                onMouseLeave={handleDesktopDropdownLeave}
                            >
                                <Link to="/posts" onClick={closeDesktopDropdown} className="dropdown-item">
                                    <span className="dropdown-item-title">Posts</span>
                                </Link>
                                <Link to="/calendar" onClick={closeDesktopDropdown} className="dropdown-item">
                                    <span className="dropdown-item-title">Calendar</span>
                                </Link>
                            </div>
                        </div>
                        <div 
                            className="dropdown"
                            ref={el => dropdownRefs.current['community'] = el}
                            onMouseEnter={() => handleDesktopDropdownEnter('community')}
                            onMouseLeave={handleDesktopDropdownLeave}
                        >
                            <button
                                className={`nav-link like-link dropdown-trigger ${(isActive('/community') || isActive('/magazines')) ? 'active' : ''}`}
                                onClick={() => handleDesktopDropdownClick('community')}
                            >
                                Our Community
                                <span className={`dropdown-arrow ${activeDesktopDropdown === 'community' ? 'open' : ''}`}>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </button>
                            <div 
                                className={`dropdown-content ${activeDesktopDropdown === 'community' ? 'open' : ''}`}
                                onMouseEnter={() => handleDesktopDropdownEnter('community')}
                                onMouseLeave={handleDesktopDropdownLeave}
                            >
                                <Link to="/community" onClick={closeDesktopDropdown} className="dropdown-item">
                                    <span className="dropdown-item-title">Our Community</span>
                                </Link>
                                <Link to="/magazines" onClick={closeDesktopDropdown} className="dropdown-item">
                                    <span className="dropdown-item-title">Magazines</span>
                                </Link>
                            </div>
                        </div>
                        <div 
                            className="dropdown"
                            ref={el => dropdownRefs.current['sponsors'] = el}
                            onMouseEnter={() => handleDesktopDropdownEnter('sponsors')}
                            onMouseLeave={handleDesktopDropdownLeave}
                        >
                            <button
                                className={`nav-link like-link dropdown-trigger ${(isActive('/sponsors') || isActive('/sponsor-us')) ? 'active' : ''}`}
                                onClick={() => handleDesktopDropdownClick('sponsors')}
                            >
                                Sponsors
                                <span className={`dropdown-arrow ${activeDesktopDropdown === 'sponsors' ? 'open' : ''}`}>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </button>
                            <div 
                                className={`dropdown-content ${activeDesktopDropdown === 'sponsors' ? 'open' : ''}`}
                                onMouseEnter={() => handleDesktopDropdownEnter('sponsors')}
                                onMouseLeave={handleDesktopDropdownLeave}
                            >
                                <Link to="/sponsors" onClick={closeDesktopDropdown} className="dropdown-item">
                                    <span className="dropdown-item-title">Sponsors</span>
                                </Link>
                                <Link to="/sponsor-us" onClick={closeDesktopDropdown} className="dropdown-item">
                                    <span className="dropdown-item-title">Sponsor Us</span>
                                </Link>
                            </div>
                        </div>
                    </nav>

                    <div className="navbar-actions">
                        <Link to="/contact-us" className="nav-button">
                            Contact Us
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginLeft: '8px' }}>
                                <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                    </div>

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
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-dropdown">
                    <button
                        className={`mobile-dropdown-trigger ${isActive('/about') ? 'active' : ''}`}
                        onClick={() => toggleMobileDropdown('about')}
                    >
                        <span>About</span>
                        <span className={`mobile-dropdown-arrow ${activeMobileDropdown === 'about' ? 'open' : ''}`}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </button>
                    <div className={`mobile-dropdown-content ${activeMobileDropdown === 'about' ? 'open' : ''}`}>
                        <Link to="/about/team" onClick={closeMobileMenu} className="mobile-dropdown-item">
                            <span className="mobile-dropdown-item-title">About the Team</span>
                        </Link>
                        <Link to="/about/first" onClick={closeMobileMenu} className="mobile-dropdown-item">
                            <span className="mobile-dropdown-item-title">About FIRST</span>
                        </Link>
                    </div>
                </div>
                <Link to="/robot/koren2025" onClick={closeMobileMenu} className={isActive('/robot') ? 'active' : ''}>Our Robots</Link>
                <div className="mobile-dropdown">
                    <button
                        className={`mobile-dropdown-trigger ${(isActive('/posts') || isActive('/calendar')) ? 'active' : ''}`}
                        onClick={() => toggleMobileDropdown('teamNews')}
                    >
                        <span>Team News</span>
                        <span className={`mobile-dropdown-arrow ${activeMobileDropdown === 'teamNews' ? 'open' : ''}`}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </button>
                    <div className={`mobile-dropdown-content ${activeMobileDropdown === 'teamNews' ? 'open' : ''}`}>
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
                        className={`mobile-dropdown-trigger ${(isActive('/sponsors') || isActive('/sponsor-us')) ? 'active' : ''}`}
                        onClick={() => toggleMobileDropdown('sponsors')}
                    >
                        <span>Sponsors</span>
                        <span className={`mobile-dropdown-arrow ${activeMobileDropdown === 'sponsors' ? 'open' : ''}`}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </button>
                    <div className={`mobile-dropdown-content ${activeMobileDropdown === 'sponsors' ? 'open' : ''}`}>
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
                        className={`mobile-dropdown-trigger ${(isActive('/community') || isActive('/magazines')) ? 'active' : ''}`}
                        onClick={() => toggleMobileDropdown('community')}
                    >
                        <span>Our Community</span>
                        <span className={`mobile-dropdown-arrow ${activeMobileDropdown === 'community' ? 'open' : ''}`}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </button>
                    <div className={`mobile-dropdown-content ${activeMobileDropdown === 'community' ? 'open' : ''}`}>
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