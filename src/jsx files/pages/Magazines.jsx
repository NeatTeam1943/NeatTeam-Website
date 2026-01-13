import React from 'react';
import '../../css files/pages/Magazines.css';

// Function to get magazine files
export function getMagazines(BASE_URL) {
    return [
        {
            id: 1,
            order: 1,
            label: 'Magazine (English)',
            description: 'First Steps Magazine - English Edition',
            href: BASE_URL + '/Magazines/Magazine.pdf'
        },
        {
            id: 2,
            order: 2,
            label: 'מגזין נוב\' עברית',
            description: 'First Steps Magazine - Hebrew Edition (November)',
            href: BASE_URL + '/Magazines/' + encodeURIComponent('מגזין נוב\' עברית.pdf')
        },
        {
            id: 3,
            order: 3,
            label: 'מגזין',
            description: 'First Steps Magazine - Hebrew Edition',
            href: BASE_URL + '/Magazines/' + encodeURIComponent('מגזין.pdf')
        }
    ].sort((a, b) => a.order - b.order);
}

// Function to get the latest N magazines
export function getLatestMagazines(BASE_URL, count = 2) {
    const magazines = getMagazines(BASE_URL);
    return magazines.slice(-count);
}

export default function Magazines() {
    const BASE_URL = import.meta.env.BASE_URL;
    const magazines = getMagazines(BASE_URL);

    return (
        <div className="magazines-page">
            <div className="magazines-header">
                <h1 className="magazines-title">First Steps Magazine</h1>
                <p className="magazines-subtitle">
                    Together with the Cypher robotics team, 4661 and the Falcons robotics team, 4338, 
                    we established our annual magazine - "First Steps"
                </p>
            </div>

            <div className="magazines-content">
                <div className="magazine-section">
                    <h2>About Our Magazine</h2>
                    <div className="magazine-content">
                        <p>
                            Our magazine focuses on various STEM topics and is specifically designed for elementary school students 
                            with the goal of exposing them to the FIRST organization and its values by introducing the FRC organization, 
                            and monthly updates on each team.
                        </p>
                        <p>
                            The magazine will be published in elementary schools in Rosh HaAyin, Even Yehuda, and the Council (Cypher) 
                            during the education classes of each grade and will be uploaded to the browser as a file translated into English and Hebrew.
                        </p>
                    </div>

                    <div className="magazine-files">
                        <h3>Magazine Files</h3>
                        {magazines.length > 0 ? (
                            <ul className="magazine-file-list">
                                {magazines.map((file) => (
                                    <li key={file.id} className="magazine-file-item">
                                        <span className="magazine-file-icon" aria-hidden="true">📄</span>
                                        <div className="magazine-file-info">
                                            <span className="magazine-file-title">{file.label}</span>
                                            <span className="magazine-file-description">{file.description}</span>
                                        </div>
                                        <a
                                            className="magazine-file-link"
                                            href={file.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View PDF
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No magazine files available at this time.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

