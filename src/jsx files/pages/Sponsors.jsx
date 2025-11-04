import React from 'react';
import '../../css files/pages/Sponsors.css'
import { useNavigate } from 'react-router-dom';

export default function Sponsors() {
    const navigate = useNavigate();
    const BASE_URL = import.meta.env.BASE_URL;

    const sponsors = [
        { id: 1, name: "Rosh Haayin", logo: BASE_URL + 'Sponsors/ROSH-HAAIN-LOGO.png' },
        { id: 2, name: "Innoviz", logo: BASE_URL +  '/Sponsors/Innoviz-Logo.png' },
        { id: 3, name: "Begin High School", logo: BASE_URL +  '/Sponsors/logo-final-01-1.png' },
        { id: 4, name: "FIRST", logo: BASE_URL + '/Sponsors/FIRST-LOGO.png' },
        { id: 5, name: "IFEL", logo: BASE_URL + '/Sponsors/IFEL-Logo.png' },
        { id: 6, name: "Kornit", logo: BASE_URL + '/Sponsors/kornit-vertical-logo-01.png' },
        { id: 7, name: "Rosh Electronics", logo: BASE_URL + '/Sponsors/Rosh-Electroptics.png' },
        { id: 8, name: "EID", logo: BASE_URL + '/Sponsors/LOGO-EID.png' },
    ];

    return (
        <div className="page">
            <div className="sponsors-page">
                <h1>Thank You to Our Sponsors!</h1>
                <h3>
                    We are incredibly grateful for the support of our sponsors. Their contributions help our team grow, build, and compete each season.
                </h3>

                <div className="sponsor-grid">
                    {sponsors.map((sponsor) => (
                        <div className="sponsor-card" key={sponsor.id}>
                            <img src={sponsor.logo} alt={sponsor.name} />
                            <p>{sponsor.name}</p>
                        </div>
                    ))}
                </div>

                <button className="button-decoration" onClick={() => navigate('/sponsor-us')}>
                    Donate and become a sponsor
                </button>
            </div>
        </div>
    );
}