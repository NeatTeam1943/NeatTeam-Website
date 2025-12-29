import '../../css files/pages/Landing.css'
import React, { useState, useEffect, useRef, useCallback } from "react";
import {Link} from "react-router-dom";

export default function Landing() {
    const BASE_URL = import.meta.env.BASE_URL;
    
    // Event photos for carousel
    const eventPhotos = [
        { 
            src: BASE_URL + "/Events/GroupPhoto.jpeg", 
            alt: "NeatTeam Group Photo At District Event",
            description: "Needs Writing From ataliya"
        },
        { 
            src: BASE_URL + "/Events/Hanukkah Camp.jpeg", 
            alt: "NeatTeam Hanukkah Camp",
            description: "Needs Writing From ataliya"
        },
        { 
            src: BASE_URL + "/Events/NeatTeam all-nighter .jpeg", 
            alt: "NeatTeam All Nighter",
            description: "Needs Writing From ataliya"
        }
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const intervalRef = useRef(null);

    // Function to reset auto-scroll timer
    const resetAutoScroll = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % eventPhotos.length);
        }, 4000);
    }, [eventPhotos.length]);

    // Auto-scroll through images every 4 seconds
    useEffect(() => {
        resetAutoScroll();
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [resetAutoScroll]);

    // Navigate to next image
    const goToNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % eventPhotos.length);
        resetAutoScroll();
    };

    // Navigate to previous image
    const goToPrevious = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + eventPhotos.length) % eventPhotos.length);
        resetAutoScroll();
    };

    // Navigate to specific image (from dots)
    const goToImage = (index) => {
        setCurrentImageIndex(index);
        resetAutoScroll();
    };

    return (
        <div className="homepage">
            <div className="homepage_container">
                <section className="section-with-img">
                    <div className="text">
                        <div className="logo-wrapper">
                            <img src={BASE_URL + "/NeatTeam/NeatTeam-banner-dark.png"} alt="NEATTEAM Logo"/>
                        </div>
                        <h2 className="title-underline subtitle">FIRST Robotics Competition Team 1943</h2>
                        <p>We are NeatTeam, Begin High School's award-winning FIRST Robotics team. We seek to impact young adults by cultivating skills in engineering, programming, and business through FIRST.</p>
                        <Link to="/about/team" className="button-decoration">Discover More</Link>
                    </div>

                    <div className="image">
                        <div className="image-carousel">
                            {eventPhotos.map((photo, index) => (
                                <img
                                    key={index}
                                    className={`img carousel-image ${index === currentImageIndex ? 'active' : ''}`}
                                    src={photo.src}
                                    alt={photo.alt}
                                />
                            ))}
                            <button 
                                className="carousel-arrow carousel-arrow-left"
                                onClick={goToPrevious}
                                aria-label="Previous image"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <button 
                                className="carousel-arrow carousel-arrow-right"
                                onClick={goToNext}
                                aria-label="Next image"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <div className="carousel-indicators">
                                {eventPhotos.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                                        onClick={() => goToImage(index)}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="carousel-description">
                            {eventPhotos.map((photo, index) => (
                                <p 
                                    key={index}
                                    className={`carousel-description-text ${index === currentImageIndex ? 'active' : ''}`}
                                >
                                    {photo.description}
                                </p>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section-with-img" id="robot">
                    <div className="">
                        <img className="img" src={BASE_URL + "/Robots/Koren.jpg"} alt="Koren Robot 2025" />
                    </div>
                    <div className="robot-details">
                        <h1 className="robot-name">Koren</h1>
                        <h2 className="robot-title">Our 2025 Robot for Reefscape</h2>
                        <div className="robot-description">
                            This is Koren, our 2025 Robot. He was named after the fallen soldier Koren Bitan.
                        </div>
                        <Link to="/robot/koren2025" className="button-decoration">Past Competition Robots</Link>
                    </div>
                </section>

            </div>
            <section className="sponsor-section" id="sponsors">
                <div className="sponsor-header">
                    <h2>Our Amazing Sponsors</h2>
                    <p>We're grateful for the support of these incredible organizations that make our robotics journey possible</p>
                </div>

                <div className="sponsor-marquee">
                    <div className="sponsor-track">
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/Innoviz-Logo.png"} alt="Innoviz" />
                        </div>
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/FIRST-LOGO.png"} alt="FIRST" />
                        </div>
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/NimbleWay-Logo.png"} alt="NimbleWay" />
                        </div>
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/kornit-vertical-logo-01.png"} alt="Kornit" />
                        </div>
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/Rosh-Electroptics.png"} alt="Rosh Electroptics" />
                        </div>
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/IFEL-Logo.png"} alt="IFEL" />
                        </div>
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/ROSH-HAAIN-LOGO.png"} alt="ROSH-HAAIN" />
                        </div>
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/LOGO-EID.png"} alt="EID" />
                        </div>

                        {/* Duplicate items for seamless loop */}
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/Innoviz-Logo.png"} alt="Innoviz" />
                        </div>
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/FIRST-LOGO.png"} alt="FIRST" />
                        </div>
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/NimbleWay-Logo.png"} alt="NimbleWay" />
                        </div>
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/kornit-vertical-logo-01.png"} alt="Kornit" />
                        </div>
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/Rosh-Electroptics.png"} alt="Rosh Electroptics" />
                        </div>
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/IFEL-Logo.png"} alt="IFEL" />
                        </div>
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/ROSH-HAAIN-LOGO.png"} alt="ROSH-HAAIN" />
                        </div>
                        <div className="sponsor-item">
                            <img src={BASE_URL + "/Sponsors/LOGO-EID.png"} alt="EID" />
                        </div>
                    </div>
                </div>

                <div className="sponsor-cta">
                    <div className="cta-content">
                        <h3>Join Our Sponsors</h3>
                        <p>Support the next generation of engineers and innovators</p>
                        <Link to="/sponsor-us" className="button-decoration">Become a Sponsor</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}