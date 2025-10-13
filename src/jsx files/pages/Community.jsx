import React, { useState } from 'react';
import '../../css files/pages/Community.css';

export default function Community() {
    const [activeTab, setActiveTab] = useState('weekly');

    const tabs = [
        { id: 'weekly', label: 'Weekly Activities', icon: '📅' },
        { id: 'ftc', label: 'FTC', icon: '🤖' },
        { id: 'magazine', label: 'Magazine', icon: '📰' },
        { id: 'peak', label: 'Community Days', icon: '⭐' }
    ];

    return (
        <div className="community-page">
            <div className="community-header">
                <h1 className="community-title">Community</h1>
                <p className="community-subtitle">
                    We advocate for weekly activities for diverse populations throughout Rosh HaAyin in various organizations, 
                    for different ages, in all fields!
                </p>
            </div>

            <div className="community-tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        <span className="tab-icon">{tab.icon}</span>
                        <span className="tab-label">{tab.label}</span>
                    </button>
                ))}
            </div>

            <div className="community-content">
                {activeTab === 'weekly' && (
                    <div className="weekly-activities">
                        <div className="section-intro">
                            <h2>Weekly Activities</h2>
                            <p>
                                Every year, a format that has become a tradition in our team, besides building the annual robot and peak days, 
                                we advocate for weekly activities for diverse populations throughout Rosh HaAyin in various organizations, 
                                for different ages, in all fields!
                            </p>
                            <p>
                                This year, we decided to focus on 5 organizations - Mosaic, Senior Citizens Forum, The House, FLL, and learning at Yitzhak Navon Elementary School.
                            </p>
                            <div className="activity-stats">
                                <div className="stat-item">
                                    <span className="stat-number">5</span>
                                    <span className="stat-label">Organizations</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">15+</span>
                                    <span className="stat-label">Team Members</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">Weekly</span>
                                    <span className="stat-label">Schedule</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">100+</span>
                                    <span className="stat-label">Beneficiaries</span>
                                </div>
                            </div>
                        </div>

                        <div className="organizations-grid">
                            <div className="org-card">
                                <div className="org-header">
                                    <h3>Mosaic</h3>
                                    <span className="org-icon">🎨</span>
                                </div>
                                <div className="org-details">
                                    <div className="org-info">
                                        <div className="info-item">
                                            <span className="info-label">📍 Location:</span>
                                            <span className="info-value">Mosaic Community Center</span>
                                        </div>
                                        <div className="info-item">
                                            <span className="info-label">🕒 Schedule:</span>
                                            <span className="info-value">Every Tuesday, 4:00 PM</span>
                                        </div>
                                        <div className="info-item">
                                            <span className="info-label">👥 Team:</span>
                                            <span className="info-value">Sarah, David, Maya</span>
                                        </div>
                                        <div className="info-item">
                                            <span className="info-label">🎯 Age Group:</span>
                                            <span className="info-value">Kindergarten - 6th Grade</span>
                                        </div>
                                    </div>
                                    <p>
                                        In this volunteering, we enrich the knowledge of children from kindergarten to elementary school who come from 
                                        families with economic difficulties who cannot afford science clubs themselves. We expose them to the world of robotics, 
                                        teach them basic concepts in science and technology, and empower their curiosity and passion for learning - 
                                        with the goal of raising the next generation!
                                    </p>
                                    <div className="activity-highlights">
                                        <span className="highlight">Robotics Basics</span>
                                        <span className="highlight">Science Experiments</span>
                                        <span className="highlight">Technology Education</span>
                                    </div>
                                </div>
                            </div>

                            <div className="org-card">
                                <div className="org-header">
                                    <h3>The House</h3>
                                    <span className="org-icon">🏠</span>
                                </div>
                                <div className="org-details">
                                    <div className="org-info">
                                        <div className="info-item">
                                            <span className="info-label">📍 Location:</span>
                                            <span className="info-value">Beit Afek Hostel</span>
                                        </div>
                                        <div className="info-item">
                                            <span className="info-label">🕒 Schedule:</span>
                                            <span className="info-value">Every Wednesday, 3:30 PM</span>
                                        </div>
                                        <div className="info-item">
                                            <span className="info-label">👥 Team:</span>
                                            <span className="info-value">Alex, Rachel, Daniel</span>
                                        </div>
                                        <div className="info-item">
                                            <span className="info-label">🎯 Age Group:</span>
                                            <span className="info-value">All Ages</span>
                                        </div>
                                    </div>
                                    <p>
                                        We visit the "Beit Afek" hostel in Rosh HaAyin. By creating fascinating lessons - we enrich their knowledge 
                                        and expose them to extraordinary activities!
                                    </p>
                                    <div className="activity-highlights">
                                        <span className="highlight">Interactive Lessons</span>
                                        <span className="highlight">Creative Activities</span>
                                        <span className="highlight">Community Building</span>
                                    </div>
                                </div>
                            </div>

                            <div className="org-card">
                                <div className="org-header">
                                    <h3>Senior Citizens Forum</h3>
                                    <span className="org-icon">👵</span>
                                </div>
                                <div className="org-details">
                                    <div className="org-info">
                                        <div className="info-item">
                                            <span className="info-label">📍 Location:</span>
                                            <span className="info-value">Community Center</span>
                                        </div>
                                        <div className="info-item">
                                            <span className="info-label">🕒 Schedule:</span>
                                            <span className="info-value">Every Thursday, 2:00 PM</span>
                                        </div>
                                        <div className="info-item">
                                            <span className="info-label">👥 Team:</span>
                                            <span className="info-value">Tomer, Itai, Yarom</span>
                                        </div>
                                        <div className="info-item">
                                            <span className="info-label">🎯 Age Group:</span>
                                            <span className="info-value">Senior Citizens</span>
                                        </div>
                                    </div>
                                    <p>
                                        Weekly meeting with the senior citizens of Rosh HaAyin! In this meeting, we conduct fascinating activities 
                                        with content adapted to the interests of the participants, such as activities on various holidays, 
                                        festivals, history, and extraordinary current events!
                                    </p>
                                    <div className="activity-highlights">
                                        <span className="highlight">Cultural Activities</span>
                                        <span className="highlight">Technology Training</span>
                                        <span className="highlight">Social Interaction</span>
                                    </div>
                                    <div className="achievement">
                                        <h4>🏆 Community Excellence Award 2025</h4>
                                        <p>
                                            Our team members - Tomer, Itai, and Yarom received a Community Excellence Award at the annual ceremony
                                            of the Rosh HaAyin Municipality by the Senior Citizens Forum management - thanks to their dedication, 
                                            investment, and impact for the organization
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="org-card">
                                <div className="org-header">
                                    <h3>FLL</h3>
                                    <span className="org-icon">🧱</span>
                                </div>
                                <div className="org-details">
                                    <div className="org-info">
                                        <div className="info-item">
                                            <span className="info-label">📍 Location:</span>
                                            <span className="info-value">Our Workshop</span>
                                        </div>
                                        <div className="info-item">
                                            <span className="info-label">🕒 Schedule:</span>
                                            <span className="info-value">Every Sunday, 5:00 PM</span>
                                        </div>
                                        <div className="info-item">
                                            <span className="info-label">👥 Team:</span>
                                            <span className="info-value">Ethan, Sophia, Liam</span>
                                        </div>
                                        <div className="info-item">
                                            <span className="info-label">🎯 Age Group:</span>
                                            <span className="info-value">Elementary Students</span>
                                        </div>
                                    </div>
                                    <p>
                                        This year, we returned to mentor the FLL team of "Nofim" Elementary School in our workshop! 
                                        This team participates in the First Lego League robotics program for middle and elementary school students. 
                                        In the competition, they build a Lego robot and face various tasks and challenges. As mentors, 
                                        we help them develop innovative ideas and guide them to help them achieve their goals.
                                    </p>
                                    <div className="activity-highlights">
                                        <span className="highlight">Lego Robotics</span>
                                        <span className="highlight">Competition Prep</span>
                                        <span className="highlight">Problem Solving</span>
                                    </div>
                                </div>
                            </div>

                            <div className="org-card">
                                <div className="org-header">
                                    <h3>Yitzhak Navon Elementary School</h3>
                                    <span className="org-icon">🏫</span>
                                </div>
                                <div className="org-details">
                                    <div className="org-info">
                                        <div className="info-item">
                                            <span className="info-label">📍 Location:</span>
                                            <span className="info-value">Yitzhak Navon School</span>
                                        </div>
                                        <div className="info-item">
                                            <span className="info-label">🕒 Schedule:</span>
                                            <span className="info-value">Every Monday, 1:00 PM</span>
                                        </div>
                                        <div className="info-item">
                                            <span className="info-label">👥 Team:</span>
                                            <span className="info-value">Emma, Noah, Ava</span>
                                        </div>
                                        <div className="info-item">
                                            <span className="info-label">🎯 Age Group:</span>
                                            <span className="info-value">5th Grade Students</span>
                                        </div>
                                    </div>
                                    <p>
                                        This year, we decided to expand our activity database, and with this decision, we established weekly activities 
                                        for 5th-grade students at Yitzhak Navon Elementary School in Rosh HaAyin. In this activity, 
                                        we provide students as part of their school day with STEM curricula - such as programming, 
                                        mechanism thinking development, and more... with the goal of exposing them to the FIRST organization and raising the next generation!
                                    </p>
                                    <div className="activity-highlights">
                                        <span className="highlight">STEM Education</span>
                                        <span className="highlight">Programming</span>
                                        <span className="highlight">Mechanism Design</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'ftc' && (
                    <div className="ftc-section">
                        <h2>FTC - Mecanic Makers</h2>
                        <div className="ftc-content">
                            <p>
                                As an integral part of us, we mentor the FTC team, called Mecanic Makers, in our workshop.
                                This team participates in the First Tech Challenge robotics program for middle and high school students.
                            </p>
                            <p>
                                In the competition, they build a robot and face various tasks and challenges. As mentors, 
                                we help them develop innovative ideas and guide them to help them achieve their goals.
                            </p>
                        </div>
                    </div>
                )}

                {activeTab === 'magazine' && (
                    <div className="magazine-section">
                        <h2>Annual Magazine - "The Name"</h2>
                        <div className="magazine-content">
                            <p>
                                Together with the Cypher robotics team, 4661 and the Falcons robotics team, 4338, 
                                we established our annual magazine - "The Name"
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
                                <p>Place where all magazine files will be attached</p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'peak' && (
                    <div className="peak-days-section">
                        <h2>Community Days</h2>
                        <div className="peak-activities">
                            <div className="peak-activity">
                                <span className="activity-icon">🏥</span>
                                <span className="activity-name">Hospitals</span>
                            </div>
                            <div className="peak-activity">
                                <span className="activity-icon">🎒</span>
                                <span className="activity-name">Distributing Supplies to Soldiers</span>
                            </div>
                            <div className="peak-activity">
                                <span className="activity-icon">🏖️</span>
                                <span className="activity-name">Beach Cleanup</span>
                            </div>
                            <div className="peak-activity">
                                <span className="activity-icon">✈️</span>
                                <span className="activity-name">Aerospace Industry</span>
                            </div>
                            <div className="peak-activity">
                                <span className="activity-icon">🦽</span>
                                <span className="activity-name">3D Printed Devices for People with Disabilities</span>
                            </div>
                            <div className="peak-activity">
                                <span className="activity-icon">🕯️</span>
                                <span className="activity-name">Memory in the Living Room</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
