import React from 'react';
import '../../css files/pages/Sponsors.css'
import { useNavigate } from 'react-router-dom';

export default function Sponsors() {
    const navigate = useNavigate();

    const sponsors = [
        { name: "Rosh Haayin", logo: 'public/Sponsors/ROSH-HAAIN-LOGO.png' },
        { name: "Innoviz", logo: 'public/Sponsors/Innoviz-LOGO.png' },
        { name: "Begin High School", logo: 'public/Sponsors/logo-final-01-1.png' },
        { name: "FIRST", logo: 'public/Sponsors/FIRST-LOGO.png' },
        { name: "IFEL", logo: 'public/Sponsors/IFEL-LOGO.png' },
        { name: "Kornit", logo: 'public/Sponsors/kornit-vertical-logo-01.png' },
        { name: "Rosh Electronics", logo: 'public/Sponsors/Rosh-Electroptics.png' },
        { name: "EID", logo: 'public/Sponsors/LOGO-EID.png' },
    ];

    return (
        <div className={'page'}>
            <div className="sponsors-page">
                <h1>Thank You to Our Sponsors!</h1>
                <h3>
                    We are incredibly grateful for the support of our sponsors. Their contributions help our team grow, build, and compete each season.
                </h3>

                <div className="sponsor-grid">
                    {sponsors.map((s, index) => (
                        <div className="sponsor-card" key={index}>
                            <img src={s.logo} alt={s.name} />
                            <p>{s.name}</p>
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