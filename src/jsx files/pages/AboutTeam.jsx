import React, { useEffect } from 'react';
import '../../css files/pages/AboutTeam.css';
import ScrollRevealItem from '../ScrollRevealItem.jsx';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const achievements = [
    { year: '2025', text: 'District 1 Event Finalist' },
    { year: '2024', text: 'OffSeason Event Winner' },
    { year: '2023', text: 'OffSeason Event Finalist' },
    { year: '2023', text: 'District 3 Event Finalist' },
    { year: '2023', text: 'District 1 Event Finalist' },
    { year: '2022', text: 'District Event Winner' },
    { year: '2017', text: 'District Event Finalist' },
    { year: '2013', text: 'FIRST Dean\'s List Finalist (Shai Ludvinovsky)' },
    { year: '2011', text: 'FIRST Dean\'s List Finalist Award (Lior Milo)' },
    { year: '2008', text: 'Chrysler Team Spirit Award' },
    { year: '2008', text: 'Woodie Flowers Winner Award (Mazal Nagar)' },
    { year: '2007', text: 'Autodesk Visualization Award' },
    { year: '2006', text: 'Regional Finalist' },
    { year: '2006', text: 'Rookie Inspiration Award' },
    { year: '2006', text: 'Team Founded' }
];

export default function AboutTeam() {
    useEffect(() => {
        // Scroll to top first
        const appElement = document.querySelector('.app');
        const mainElement = document.querySelector('main');
        
        if (appElement) {
            appElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
        
        if (mainElement) {
            mainElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }
        
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        
        // Then refresh ScrollTrigger after a small delay
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);
        
        const handleLoad = () => {
            ScrollTrigger.refresh();
            // Ensure scroll to top after load
            if (appElement) {
                appElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            }
            if (mainElement) {
                mainElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            }
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        };
        
        window.addEventListener('load', handleLoad);
        
        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <div className="about-page">
            <section className="about-intro">
                <h1 className="about-title">Our Story</h1>
                <p className="about-description">
                    Since 2006, the high school robotics team NeatTeam #1943 from Rosh HaAyin's Begin High School has represented Israel with pride in the international FIRST Robotics Competition. Mazal Nagar started the team, which has since developed into an enthusiastic group of students that design, construct, and compete with cutting-edge robots on national and international arenas, taking home numerous honors and making it to the world championship.
                </p>
                <p className="about-description">
                    There is more to NeatTeam than just robots. The team's fundamental goal is to use science and technology to advance society. Team members serve the community every week by mentoring younger robotics teams, organizing scientific clubs for children from disadvantaged families, instructing older citizens in technology, and even assisting small business owners, particularly women, in embracing digital tools. In order to provide inclusive science education to kids with special needs, they also work with youth movements like Krembo Wings.
                </p>
                <p className="about-description">
                    NeatTeam is a special illustration of what young minds can accomplish when provided with the resources and encouragement to flourish because of its harmony of creativity, collaboration, and social impact. Sponsoring NeatTeam #1943 is an investment in the next generation of changemakers, not just the next robot.
                </p>
            </section>

            <section className="about-timeline">
                <h2>Team Milestones</h2>
                <ul>
                    {achievements.map((achievement, index) => (
                        <ScrollRevealItem
                            key={index}
                            scrollContainerRef={null}
                            baseOpacity={0}
                            baseY={60}
                            className=""
                        >
                            <li>
                                <strong>{achievement.year}:</strong> {achievement.text}
                            </li>
                        </ScrollRevealItem>
                    ))}
                </ul>
            </section>
        </div>
    );
}