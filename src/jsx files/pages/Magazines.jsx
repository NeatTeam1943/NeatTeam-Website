import React from 'react';
import '../../css files/pages/Magazines.css';

const BASE_URL = import.meta.env.BASE_URL;

export const getMagazineFiles = () => {
    return [
        {
            id: 'magazine-en',
            order: 1,
            label: 'Annual Magazine (English)',
            description: 'Download the English edition of "First Steps".',
            href: BASE_URL + '/Magazines/Magazine.pdf'
        },
        {
            id: 'magazine-he',
            order: 2,
            label: 'Annual Magazine (Hebrew)',
            description: 'Download the Hebrew edition of "First Steps".',
            href: BASE_URL + '/Magazines/%D7%9E%D7%92%D7%96%D7%99%D7%9F.pdf'
        },
        {
            id: 'magazine-nov-he',
            order: 3,
            label: 'November Magazine (Hebrew)',
            description: 'Download the November edition of the magazine in Hebrew.',
            href: BASE_URL + '/Magazines/' + encodeURIComponent('מגזין נוב\' עברית.pdf')
        }
    ].sort((a, b) => a.order - b.order);
};

export const getLatestMagazine = () => {
    const magazines = getMagazineFiles();
    return magazines[magazines.length - 1];
};

export const getLatestMagazines = (count = 2) => {
    const magazines = getMagazineFiles();
    return magazines.slice(-count);
};

export default function Magazines() {
    const magazineFiles = getMagazineFiles();

    return (
        <div className="magazines-page">
            <div className="magazines-header">
                <h1 className="magazines-title">Magazines</h1>
                <p className="magazines-subtitle">
                    Explore our annual magazine "First Steps" - a collaborative publication featuring STEM topics 
                    and updates from our robotics community.
                </p>
            </div>

            <div className="magazines-content">
                <div className="magazine-section">
                    <h2>Annual Magazine - "First Steps"</h2>
                    <div className="magazine-content">
                        <p>
                            Together with the Cypher robotics team, 4661 and the Falcons robotics team, 4338, 
                            we established our annual magazine - "First Steps"
                        </p>
                        <p>
                            Our magazine focuses on various STEM topics and is specifically designed for elementary school students 
                            with the goal of exposing them to the FIRST organization and its values by introducing the FRC organization, 
                            and monthly updates on each team.
                        </p>
                        <p>
                            The magazine will be published in elementary schools in Rosh HaAyin, Even Yehuda, and the Council (Cypher) 
                            during the education classes of each grade and will be uploaded to the browser as a file translated into English and Hebrew.
                        </p>
                        <div className="magazine-files">
                            <h3>Magazine Files</h3>
                            <ul className="magazine-file-list">
                                {magazineFiles.map((file) => (
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


